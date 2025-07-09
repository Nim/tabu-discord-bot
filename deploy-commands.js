const { deployCommands } = require('./deploy-utils');

const config = require('./config.js');
const token = config.discordToken;

const clientId = config.clientId;
const guildId = config.guildId;

(async () => {
	try {
		console.log(`Started refreshing application (/) commands.`);

		await deployCommands(token, clientId, guildId);

		console.log(`Successfully reloaded application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
