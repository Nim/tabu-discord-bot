const { deployCommands } = require('./deploy-utils');

const token = process.env.DISCORD_TOKEN;

const clientId = process.env.CLIENT_ID;
//const guildId = process.env.GUILD_ID;

(async () => {
	try {
		console.log(`Started refreshing application (/) commands.`);

		await deployCommands(token, clientId);

		console.log(`Successfully reloaded application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();
