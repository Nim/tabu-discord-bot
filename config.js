require('dotenv').config();

module.exports = {
  commandsFolder: 'commands',
  eventsFolder: 'events',
  googleClientId: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  googleCallbackUrl: process.env.GOOGLE_CALLBACK_URL,
  port: process.env.PORT || 3001,
  discordToken: process.env.DISCORD_TOKEN,
  clientId: process.env.CLIENT_ID,
  guildId: process.env.GUILD_ID,
  apiUrl: process.env.API_URL,
  startBot: process.env.START_BOT,
};
