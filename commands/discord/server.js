const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Provides information about the server.'),
	async execute(interaction) {
		try {
			// interaction.guild is the object representing the Guild in which the command was run
			const guild = interaction.guild;
			const serverName = guild.name;
			const memberCount = guild.memberCount;
			const iconURL = guild.iconURL();
			const channelCount = guild.channels.cache.size;

			await interaction.reply(`This server is ${serverName} and has ${memberCount} members. It has ${channelCount} channels. Server icon: ${iconURL}`);
		} catch (error) {
			console.error('Error executing server command:', error);
			await interaction.reply('An error occurred while fetching server information.');
		}
	},
};
