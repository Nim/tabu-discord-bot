const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all available commands.'),
    async execute(interaction) {
        try {
            // Map through all commands and format them as a string
            const commands = interaction.client.commands.map(cmd => `\`${cmd.data.name}\`: ${cmd.data.description}`).join('\n');
            // Reply to the interaction with the list of commands
            await interaction.reply(`Available commands:\n${commands}`);
        } catch (error) {
            // Log the error for debugging purposes
            console.error('Error executing help command:', error);
            // Reply to the interaction with an error message
            await interaction.reply('An error occurred while fetching the list of commands.');
        }
    },
};
