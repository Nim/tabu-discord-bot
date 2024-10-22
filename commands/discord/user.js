const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Provides information about the user.'),
	async execute(interaction) {
		try {
			// interaction.user is the object representing the User who ran the command
			const user = interaction.user;
			// interaction.member is the GuildMember object, which represents the user in the specific guild
			const member = interaction.member;

			// Extract user information
			const username = user.username;
			const joinedAt = member.joinedAt;
			const roles = member.roles.cache.map(role => role.name).join(', ');

			// Reply with user information
			await interaction.reply(`This command was run by ${username}, who joined on ${joinedAt}. Roles: ${roles}`);
		} catch (error) {
			console.error('Error executing user command:', error);
			await interaction.reply('An error occurred while fetching user information.');
		}
	},
};
