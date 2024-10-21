const { SlashCommandBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all available commands.'),
    async execute(interaction) {
        const commands = interaction.client.commands.map(cmd => `\`${cmd.data.name}\`: ${cmd.data.description}`).join('\n');
        await interaction.reply(`Available commands:\n${commands}`);
    },
};
