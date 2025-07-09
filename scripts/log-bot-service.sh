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

# Log the status of the bot service
echo "Status of $BOT_SERVICE_NAME:"
systemctl status $BOT_SERVICE_NAME
