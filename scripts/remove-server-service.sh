#!/bin/bash

# Check if the script is run as sudo
if [ "$EUID" -ne 0 ]
  then echo "Please run as sudo: sudo $0"
  exit
fi

# Get the current directory
CURRENT_DIR=$(pwd)

# Define service name
SERVER_SERVICE_NAME=$(basename "$CURRENT_DIR")-server.service

# Disable the server service
systemctl disable $SERVER_SERVICE_NAME
if [ $? -ne 0 ]; then
  echo "Failed to disable the server service."
  exit 1
fi

# Stop the server service
systemctl stop $SERVER_SERVICE_NAME
if [ $? -ne 0 ]; then
  echo "Failed to stop the server service."
  exit 1
fi

# Remove the server service file
rm /etc/systemd/system/$SERVER_SERVICE_NAME
if [ $? -ne 0 ]; then
  echo "Failed to remove the server service file."
  exit 1
fi

# Reload the systemd daemon
systemctl daemon-reload

echo "Server service removed successfully."
