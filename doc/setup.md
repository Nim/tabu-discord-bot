# Setup and Run the Bot

1. Clone the repository:
   ```
   git clone https://github.com/tabu-hr/tabu-discord-bot.git
   cd tabu-discord-bot
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   DISCORD_TOKEN=your_discord_bot_token
   CLIENT_ID=your_discord_client_id
   GUILD_ID=your_discord_guild_id
   START_BOT=true
   ```

4. Start the bot:
   ```
   npm start

## Setting Up Google OAuth

To set up Google OAuth, follow these steps:

1. Create a project in the [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the Google+ API for your project.
3. Create OAuth 2.0 credentials (client ID and client secret).
4. Set the authorized redirect URI to `http://localhost:${PORT}/auth/google/callback`, where `${PORT}` is the port number specified in your `.env` file.
5. Add the client ID, client secret, and callback URL to your `.env` file:

```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:${PORT}/auth/google/callback
```

## Running the Server

To start the server, run:

```
npm run start-server
```

The server will be running on the port specified in your `.env` file.

## Running the Bot and Server as a Service

To run the bot and server as a service, use the provided bash script:

```
sudo ./scripts/start-service.sh
```

This script will start both the Discord bot and the server, and will keep them running until you stop the script.

## Creating a Systemd Service

To create a systemd service that runs the bot and server on system boot, use the provided bash script:

```
sudo ./scripts/create-service.sh
```

This script will create the systemd service file, enable the service to start on boot, and start the service. If the script is not run as `sudo`, it will prompt you with the following message:

```
Please run as sudo: sudo ./scripts/create-service.sh
```

## Restarting the Services

To restart the bot service, use the provided bash script:

```
sudo ./scripts/restart-bot-service.sh
```

To restart the server service, use the provided bash script:

```
sudo ./scripts/restart-server-service.sh
```

## Stopping the Services

To stop the bot service, use the provided bash script:

```
sudo ./scripts/stop-bot-service.sh
```

To stop the server service, use the provided bash script:

```
sudo ./scripts/stop-server-service.sh
```

## Removing the Services

To remove the bot service, use the provided bash script:

```
sudo ./scripts/remove-bot-service.sh
```

To remove the server service, use the provided bash script:

```
sudo ./scripts/remove-server-service.sh
```

## Logging the Services

To log the status of the bot service, use the provided bash script:

```
sudo ./scripts/log-bot-service.sh
```

To log the status of the server service, use the provided bash script:

```
sudo ./scripts/log-server-service.sh
```
