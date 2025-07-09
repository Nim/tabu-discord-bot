#!/bin/bash

# Check if the script is run as sudo
if [ "$EUID" -ne 0 ]
  then echo "Please run as sudo: sudo $0"
  exit
fi

# Get the current directory
CURRENT_DIR=$(pwd)

# Define service name
BOT_SERVICE_NAME=$(basename "$CURRENT_DIR")-bot.service

# Restart the bot service
systemctl restart $BOT_SERVICE_NAME

echo "Bot service restarted successfully."
