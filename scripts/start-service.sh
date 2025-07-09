#!/bin/bash

# Start the Discord bot
echo "Starting Discord bot..."
npm start &

# Start the server
echo "Starting server..."
npm run start-server &

# Wait for any process to exit
wait -n

# Exit with status of process that exited first
exit $?
