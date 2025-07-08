#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.join(__dirname, '../../..');

console.log('🎨 Figma MCP Setup');
console.log('==================\n');

// Check if .env file exists
const envPath = path.join(projectRoot, '.env');
const envExists = fs.existsSync(envPath);

if (envExists) {
  console.log('✅ .env file already exists');
} else {
  console.log('📝 Creating .env file...');
  
  const envContent = `# Figma MCP Configuration

# Your Figma Personal Access Token
# Get this from: Figma → Settings → Account → Personal access tokens
FIGMA_ACCESS_TOKEN=your_figma_access_token_here

# Your Figma File Key (from the URL: https://www.figma.com/file/FILE_KEY/...)
FIGMA_FILE_KEY=your_figma_file_key_here
`;

  fs.writeFileSync(envPath, envContent);
  console.log('✅ Created .env file');
}

console.log('\n📋 Next Steps:');
console.log('1. Edit the .env file and add your Figma access token');
console.log('2. Add your Figma file key to the .env file');
console.log('3. Run: npm run mcp:start');
console.log('\n🔗 Get your Figma access token from:');
console.log('   https://www.figma.com/settings → Account → Personal access tokens');
console.log('\n📁 Your Figma file key is in the URL:');
console.log('   https://www.figma.com/file/FILE_KEY/...'); 