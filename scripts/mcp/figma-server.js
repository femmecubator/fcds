#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

const FIGMA_API_BASE = 'https://api.figma.com/v1';

class FigmaMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'figma-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
  }

  setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'get_figma_file',
            description: 'Get Figma file data including nodes, components, and styles',
            inputSchema: {
              type: 'object',
              properties: {
                fileKey: {
                  type: 'string',
                  description: 'The Figma file key (from the URL)',
                },
                nodeIds: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Optional: Specific node IDs to retrieve',
                },
              },
              required: ['fileKey'],
            },
          },
          {
            name: 'get_figma_components',
            description: 'Get all components from a Figma file',
            inputSchema: {
              type: 'object',
              properties: {
                fileKey: {
                  type: 'string',
                  description: 'The Figma file key',
                },
              },
              required: ['fileKey'],
            },
          },
          {
            name: 'get_figma_styles',
            description: 'Get all styles from a Figma file',
            inputSchema: {
              type: 'object',
              properties: {
                fileKey: {
                  type: 'string',
                  description: 'The Figma file key',
                },
              },
              required: ['fileKey'],
            },
          },
          {
            name: 'get_figma_images',
            description: 'Get image URLs for Figma nodes',
            inputSchema: {
              type: 'object',
              properties: {
                fileKey: {
                  type: 'string',
                  description: 'The Figma file key',
                },
                nodeIds: {
                  type: 'array',
                  items: { type: 'string' },
                  description: 'Node IDs to get images for',
                },
                format: {
                  type: 'string',
                  enum: ['jpg', 'png', 'svg', 'pdf'],
                  default: 'png',
                  description: 'Image format',
                },
                scale: {
                  type: 'number',
                  default: 1,
                  description: 'Image scale factor',
                },
              },
              required: ['fileKey', 'nodeIds'],
            },
          },
        ],
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_figma_file':
            return await this.getFigmaFile(args.fileKey, args.nodeIds);
          case 'get_figma_components':
            return await this.getFigmaComponents(args.fileKey);
          case 'get_figma_styles':
            return await this.getFigmaStyles(args.fileKey);
          case 'get_figma_images':
            return await this.getFigmaImages(args.fileKey, args.nodeIds, args.format, args.scale);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  async getFigmaFile(fileKey, nodeIds = null) {
    const accessToken = process.env.FIGMA_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error('FIGMA_ACCESS_TOKEN environment variable is required');
    }

    const url = nodeIds 
      ? `${FIGMA_API_BASE}/files/${fileKey}/nodes?ids=${nodeIds.join(',')}`
      : `${FIGMA_API_BASE}/files/${fileKey}`;

    const response = await fetch(url, {
      headers: {
        'X-Figma-Token': accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  async getFigmaComponents(fileKey) {
    const accessToken = process.env.FIGMA_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error('FIGMA_ACCESS_TOKEN environment variable is required');
    }

    const response = await fetch(`${FIGMA_API_BASE}/files/${fileKey}/components`, {
      headers: {
        'X-Figma-Token': accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  async getFigmaStyles(fileKey) {
    const accessToken = process.env.FIGMA_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error('FIGMA_ACCESS_TOKEN environment variable is required');
    }

    const response = await fetch(`${FIGMA_API_BASE}/files/${fileKey}/styles`, {
      headers: {
        'X-Figma-Token': accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  async getFigmaImages(fileKey, nodeIds, format = 'png', scale = 1) {
    const accessToken = process.env.FIGMA_ACCESS_TOKEN;
    if (!accessToken) {
      throw new Error('FIGMA_ACCESS_TOKEN environment variable is required');
    }

    const params = new URLSearchParams({
      ids: nodeIds.join(','),
      format,
      scale: scale.toString(),
    });

    const response = await fetch(`${FIGMA_API_BASE}/images/${fileKey}?${params}`, {
      headers: {
        'X-Figma-Token': accessToken,
      },
    });

    if (!response.ok) {
      throw new Error(`Figma API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Figma MCP Server running...');
  }
}

const server = new FigmaMCPServer();
server.run().catch(console.error); 