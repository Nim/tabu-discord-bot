const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		//console.log("Pong");
		
		return interaction.reply(`Pong. Websocket heartbeat: ${interaction.client.ws.ping} ms.`);
	},
};
