const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		try {
			// Log the ping command execution for debugging purposes
			console.log("Ping command executed");

			// Reply to the interaction with the pong message and websocket heartbeat latency
			await interaction.reply(`Pong. Websocket heartbeat: ${interaction.client.ws.ping} ms.`);
		} catch (error) {
			// Log the error for debugging purposes
			console.error('Error executing ping command:', error);

			// Reply to the interaction with an error message
			await interaction.reply('An error occurred while processing the ping command.');
		}
	},
};
