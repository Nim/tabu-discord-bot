#!/bin/bash

# Check if dotenvx is installed
if ! command -v dotenvx &> /dev/null; then
  echo "dotenvx could not be found, installing..."
  curl -fsS https://dotenvx.sh | sudo sh
fi

# Check if the script is run as sudo
if [ "$EUID" -ne 0 ]; then
  echo "Please run as sudo: sudo $0"
  exit
fi

# Get the current user
CURRENT_USER=$(whoami)

# Get the current directory
CURRENT_DIR=$(pwd)

# Define the path to dotenvx
DOTENVX_PATH=$(whereis dotenvx | awk '{print $2}')

# Define service names
BOT_SERVICE_NAME=$(basename "$CURRENT_DIR")-bot.service
SERVER_SERVICE_NAME=$(basename "$CURRENT_DIR")-server.service

# Create the systemd service files
BOT_SERVICE_FILE="/etc/systemd/system/$BOT_SERVICE_NAME"
cat <<EOL > $BOT_SERVICE_FILE
[Unit]
Description=$BOT_SERVICE_NAME
After=network.target

[Service]
ExecStart=$DOTENVX_PATH run -- /usr/bin/npm start
WorkingDirectory=$CURRENT_DIR
StandardOutput=inherit
StandardError=inherit
Restart=always
User=$CURRENT_USER

[Install]
WantedBy=multi-user.target
EOL

SERVER_SERVICE_FILE="/etc/systemd/system/$SERVER_SERVICE_NAME"
cat <<EOL > $SERVER_SERVICE_FILE
[Unit]
Description=$SERVER_SERVICE_NAME
After=network.target

[Service]
ExecStart=$DOTENVX_PATH run -- /usr/bin/npm run start-server
WorkingDirectory=$CURRENT_DIR
StandardOutput=inherit
StandardError=inherit
Restart=always
User=$CURRENT_USER

[Install]
WantedBy=multi-user.target
EOL

# Check if the bot service is already enabled
if systemctl is-enabled --quiet $BOT_SERVICE_NAME; then
  # Restart the bot service
  systemctl restart $BOT_SERVICE_NAME
  if [ $? -ne 0 ]; then
    echo "Failed to restart the bot service."
    exit 1
  fi
else
  # Enable the bot service to start on boot
  systemctl enable $BOT_SERVICE_NAME
  if [ $? -ne 0 ]; then
    echo "Failed to enable the bot service."
    exit 1
  fi

  # Start the bot service
  systemctl start $BOT_SERVICE_NAME
  if [ $? -ne 0 ]; then
    echo "Failed to start the bot service."
    exit 1
  fi
fi

# Check if the server service is already enabled
if systemctl is-enabled --quiet $SERVER_SERVICE_NAME; then
  # Restart the server service
  systemctl restart $SERVER_SERVICE_NAME
  if [ $? -ne 0 ]; then
    echo "Failed to restart the server service."
    exit 1
  fi
else
  # Enable the server service to start on boot
  systemctl enable $SERVER_SERVICE_NAME
  if [ $? -ne 0 ]; then
    echo "Failed to enable the server service."
    exit 1
  fi

  # Start the server service
  systemctl start $SERVER_SERVICE_NAME
  if [ $? -ne 0 ]; then
    echo "Failed to start the server service."
    exit 1
  fi
fi

echo "Tabu Discord Bot service created and started successfully."
