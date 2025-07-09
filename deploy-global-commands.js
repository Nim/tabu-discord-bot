const { deployCommands } = require('./deploy-utils');

const config = require('./config.js');
const token = config.discordToken;
const clientId = config.clientId;

(async () => {
	try {
		console.log(`Started refreshing application (/) commands.`);

		// Deploy commands globally
		await deployCommands(token, clientId);

		console.log(`Successfully reloaded application (/) commands.`);
	} catch (error) {
		// Log the error for debugging purposes
		console.error('Error deploying global commands:', error);
	}
})();
