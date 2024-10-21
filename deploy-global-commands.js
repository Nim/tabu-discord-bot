const { deployCommands } = require('./deploy-utils');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;

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
