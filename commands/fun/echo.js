const { SlashCommandBuilder } = require('discord.js');

const data = new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('input')
			.setDescription('The input to echo back')
			.setRequired(true))
	.addBooleanOption(option =>
		option.setName('ephemeral')
			.setDescription('Whether or not the echo should be ephemeral'));

module.exports = {
	cooldown: 5,
	data: data,
	async execute(interaction) {
		try {
			// Extract input and ephemeral options from the interaction
			const content = interaction.options.getString('input') ?? '.';
			const ephemeral = interaction.options.getBoolean('ephemeral') ?? false;

			// Log the input for debugging purposes
			console.log(`Echo command received with input: ${content}, ephemeral: ${ephemeral}`);

			// Reply to the interaction with the echoed content
			await interaction.reply({ content: content, ephemeral: ephemeral });
		} catch (error) {
			// Log the error for debugging purposes
			console.error('Error executing echo command:', error);

			// Reply to the interaction with an error message
			await interaction.reply('An error occurred while processing the echo command.');
		}
	},
};
