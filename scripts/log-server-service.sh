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

# Log the status of the server service
echo "Status of $SERVER_SERVICE_NAME:"
systemctl status $SERVER_SERVICE_NAME
