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

# Stop the bot service
systemctl stop $BOT_SERVICE_NAME

echo "Bot service stopped successfully."
