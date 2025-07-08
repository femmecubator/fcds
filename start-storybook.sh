#!/bin/bash

echo "🚀 Starting FemmeCubator Design System Storybook..."
echo "📍 Directory: $(pwd)"
echo "🔗 Figma File: tiGtyc8Fom1Iw7HrTGFm7y"
echo ""

# Kill any existing Storybook processes
pkill -f "storybook" 2>/dev/null

# Start Storybook
echo "📖 Starting Storybook..."
npm run storybook &

# Wait a moment for Storybook to start
sleep 5

echo ""
echo "✅ Storybook is now running!"
echo "🌐 Access your design system at: http://localhost:6006"
echo ""
echo "📋 Share this link with your boss:"
echo "   http://localhost:6006"
echo ""
echo "💡 To stop Storybook, press Ctrl+C or run: pkill -f storybook"
echo ""
