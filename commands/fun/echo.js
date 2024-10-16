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
		const content = interaction.options.getString('input') ?? '.';
		const ephemeral = interaction.options.getBoolean('ephemeral') ?? false;
		return interaction.reply({ content: content, ephemeral: ephemeral });
	},
};
