# Figma MCP Setup Guide

Your Figma MCP (Model Context Protocol) server is now set up! This allows AI assistants to interact with your Figma files through the MCP protocol.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the setup script:**
   ```bash
   npm run mcp:setup
   ```

3. **Configure your environment:**
   - Edit the `.env` file that was created
   - Add your Figma access token
   - Add your Figma file key

4. **Start the MCP server:**
   ```bash
   npm run mcp:start
   ```

## 📁 Files Created

- `mcp-config.json` - Main MCP configuration
- `scripts/mcp/figma-server.js` - JavaScript MCP server
- `scripts/mcp/figma-server.ts` - TypeScript version (for development)
- `scripts/mcp/setup.js` - Setup helper script
- `scripts/mcp/README.md` - Detailed documentation

## 🔧 Available Tools

The MCP server provides these tools for AI assistants:

### `get_figma_file`
Get complete Figma file data including nodes, components, and styles.

**Parameters:**
- `fileKey` (required): Figma file key from URL
- `nodeIds` (optional): Specific node IDs to retrieve

### `get_figma_components`
Get all components from a Figma file.

**Parameters:**
- `fileKey` (required): Figma file key

### `get_figma_styles`
Get all styles from a Figma file.

**Parameters:**
- `fileKey` (required): Figma file key

### `get_figma_images`
Get image URLs for Figma nodes.

**Parameters:**
- `fileKey` (required): Figma file key
- `nodeIds` (required): Array of node IDs
- `format` (optional): Image format (jpg, png, svg, pdf) - defaults to png
- `scale` (optional): Image scale factor - defaults to 1

## 🔑 Getting Your Figma Credentials

### Access Token
1. Go to [Figma Settings](https://www.figma.com/settings)
2. Navigate to Account → Personal access tokens
3. Create a new token
4. Copy the token to your `.env` file

### File Key
1. Open your Figma file in the browser
2. The URL will be: `https://www.figma.com/file/FILE_KEY/...`
3. Copy the FILE_KEY part to your `.env` file

## 🛠️ Scripts

- `npm run mcp:setup` - Initialize environment configuration
- `npm run mcp:start` - Start the MCP server
- `npm run mcp:dev` - Start in development mode with auto-restart
- `npm run mcp:build` - Build TypeScript version

## 🔗 Integration

This MCP server integrates with your existing Figma setup:

- Uses the same `@figma/code-connect` dependency
- Follows the same environment variable pattern as your other scripts
- Can be used alongside your existing Figma token and icon scripts

## 📝 Example Usage

Once configured, AI assistants can use the MCP server to:

- Fetch design tokens and styles from Figma
- Get component information for code generation
- Export images and assets
- Analyze design structure and hierarchy

## 🐛 Troubleshooting

**"FIGMA_ACCESS_TOKEN environment variable is required"**
- Check that your `.env` file exists and contains the token
- Verify the token is valid in Figma

**"Figma API error: 403"**
- Ensure your access token has the correct permissions
- Check that the file key is correct and accessible

**"Unknown tool" error**
- Make sure you're using one of the available tool names
- Check that tool parameters match the expected schema

## 🔄 Next Steps

1. Test the MCP server with your AI assistant
2. Customize the tools based on your specific needs
3. Add additional Figma API endpoints as needed
4. Integrate with your existing design system workflow 