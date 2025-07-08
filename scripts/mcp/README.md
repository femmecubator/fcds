# Figma MCP Server

This directory contains the Model Context Protocol (MCP) server for Figma integration.

## Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Set Environment Variables**
   Create a `.env` file in the project root with your Figma access token:
   ```env
   FIGMA_ACCESS_TOKEN=your_figma_access_token_here
   FIGMA_FILE_KEY=your_figma_file_key_here
   ```

   To get your Figma access token:
   - Go to Figma → Settings → Account → Personal access tokens
   - Create a new token
   - Copy the token to your `.env` file

3. **Get Figma File Key**
   - Open your Figma file in the browser
   - The URL will be: `https://www.figma.com/file/FILE_KEY/...`
   - Copy the FILE_KEY part

## Available Tools

The MCP server provides the following tools:

### `get_figma_file`
Get Figma file data including nodes, components, and styles.

**Parameters:**
- `fileKey` (required): The Figma file key from the URL
- `nodeIds` (optional): Array of specific node IDs to retrieve

### `get_figma_components`
Get all components from a Figma file.

**Parameters:**
- `fileKey` (required): The Figma file key

### `get_figma_styles`
Get all styles from a Figma file.

**Parameters:**
- `fileKey` (required): The Figma file key

### `get_figma_images`
Get image URLs for Figma nodes.

**Parameters:**
- `fileKey` (required): The Figma file key
- `nodeIds` (required): Array of node IDs to get images for
- `format` (optional): Image format (jpg, png, svg, pdf) - defaults to png
- `scale` (optional): Image scale factor - defaults to 1

## Usage

### Running the Server
```bash
# Start the MCP server
npm run mcp:start

# Start in development mode with auto-restart
npm run mcp:dev
```

### Example MCP Configuration
Add this to your MCP client configuration:

```json
{
  "mcpServers": {
    "figma": {
      "command": "node",
      "args": ["./scripts/mcp/figma-server.js"],
      "env": {
        "FIGMA_ACCESS_TOKEN": "${FIGMA_ACCESS_TOKEN}",
        "FIGMA_FILE_KEY": "${FIGMA_FILE_KEY}"
      }
    }
  }
}
```

## Integration with Your Project

This MCP server integrates with your existing Figma setup:

- Uses the same `@figma/code-connect` dependency
- Follows the same environment variable pattern as your other scripts
- Can be used alongside your existing Figma token and icon scripts

## Troubleshooting

1. **"FIGMA_ACCESS_TOKEN environment variable is required"**
   - Make sure your `.env` file exists and contains the token
   - Verify the token is valid in Figma

2. **"Figma API error: 403"**
   - Check that your access token has the correct permissions
   - Ensure the file key is correct and accessible

3. **"Unknown tool" error**
   - Make sure you're using one of the available tool names
   - Check the tool parameters match the expected schema 