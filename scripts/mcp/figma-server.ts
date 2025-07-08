#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema, CallToolRequest } from '@modelcontextprotocol/sdk/types.js';

const FIGMA_API_BASE = 'https://api.figma.com/v1';

interface FigmaFileResponse {
  document: any;
  components: Record<string, any>;
  styles: Record<string, any>;
  name: string;
  lastModified: string;
  thumbnailUrl: string;
  version: string;
  schemaVersion: number;
}

interface FigmaComponentsResponse {
  meta: {
    components: Record<string, any>;
  };
}

interface FigmaStylesResponse {
  meta: {
    styles: Record<string, any>;
  };
}

interface FigmaImagesResponse {
  err: string | null;
  images: Record<string, string>;
}

class FigmaMCPServer {
  private server: Server;

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

  private setupToolHandlers(): void {
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
    this.server.setRequestHandler(CallToolRequestSchema, async (request: CallToolRequest) => {
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
              text: `Error: ${error instanceof Error ? error.message : String(error)}`,
            },
          ],
          isError: true,
        };
      }
    });
  }

  private async getFigmaFile(fileKey: string, nodeIds?: string[]): Promise<any> {
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

    const data: FigmaFileResponse = await response.json();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  private async getFigmaComponents(fileKey: string): Promise<any> {
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

    const data: FigmaComponentsResponse = await response.json();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  private async getFigmaStyles(fileKey: string): Promise<any> {
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

    const data: FigmaStylesResponse = await response.json();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  private async getFigmaImages(
    fileKey: string, 
    nodeIds: string[], 
    format: string = 'png', 
    scale: number = 1
  ): Promise<any> {
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

    const data: FigmaImagesResponse = await response.json();
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(data, null, 2),
        },
      ],
    };
  }

  public async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Figma MCP Server running...');
  }
}

const server = new FigmaMCPServer();
server.run().catch(console.error); 