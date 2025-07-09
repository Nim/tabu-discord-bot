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

# Disable the bot service
systemctl disable $BOT_SERVICE_NAME
if [ $? -ne 0 ]; then
  echo "Failed to disable the bot service."
  exit 1
fi

# Stop the bot service
systemctl stop $BOT_SERVICE_NAME
if [ $? -ne 0 ]; then
  echo "Failed to stop the bot service."
  exit 1
fi

# Remove the bot service file
rm /etc/systemd/system/$BOT_SERVICE_NAME
if [ $? -ne 0 ]; then
  echo "Failed to remove the bot service file."
  exit 1
fi

# Reload the systemd daemon
systemctl daemon-reload

echo "Bot service removed successfully."
