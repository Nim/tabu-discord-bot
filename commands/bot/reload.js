const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	cooldown: 5,
	data: new SlashCommandBuilder()
		.setName('reload')
		.setDescription('Reloads a command.')
		.addStringOption(option =>
			option.setName('command')
				.setDescription('The command to reload.')
				.setRequired(true)),
	async execute(interaction) {
		const commandName = interaction.options.getString('command', true).toLowerCase();
		const command = interaction.client.commands.get(commandName);

		if (!command) {
			return interaction.reply(`There is no command with name \`${commandName}\`!`);
		}

		// Log the command being reloaded for debugging purposes
		console.log(`Reloading command: ${commandName}`);

		// Delete the command from the cache
		delete require.cache[require.resolve(`${command.category}/${command.data.name}.js`)];

		try {
			// Delete the command from the client's commands collection
			interaction.client.commands.delete(command.data.name);

			// Require the new command
			const newCommand = require(`${command.category}/${command.data.name}.js`);
			newCommand.category = command.category;

			// Set the new command in the client's commands collection
			interaction.client.commands.set(newCommand.data.name, newCommand);

			// Reply to the interaction with a success message
			await interaction.reply(`Command \`${newCommand.data.name}\` was reloaded!`);
		} catch (error) {
			// Log the error for debugging purposes
			console.error(error);

			// Reply to the interaction with an error message
			await interaction.reply(`There was an error while reloading the command \`${command.data.name}\`:\n\`${error.message}\``);
		}
	},
};
