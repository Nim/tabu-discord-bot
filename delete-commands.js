const { REST, Routes } = require('discord.js');

const config = require('./config.js');
const token = config.discordToken;
const clientId = config.clientId;
const guildId = config.guildId;

const rest = new REST().setToken(token);

// Delete all guild-specific commands
const guilds = guildId.split(",");
for(let guild in guilds)
{
	console.log(guilds[guild]);
	rest.put(Routes.applicationGuildCommands(clientId, guilds[guild]), { body: [] })
	.then(() => console.log('Successfully deleted all guild commands.'))
	.catch(error => console.error('Error deleting guild commands:', error));
}
// Delete all global commands
rest.put(Routes.applicationCommands(clientId), { body: [] })
	.then(() => console.log('Successfully deleted all application commands.'))
	.catch(error => console.error('Error deleting application commands:', error));
