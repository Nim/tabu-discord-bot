const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lastmsg')
		.setDescription('Last messages on server.'),
	async execute(interaction) {
		let msg = [];

		try {
			await interaction.deferReply();
			await interaction.editReply(`Fetching last messages on this server...`);

			const channels = await interaction.guild.channels.fetch();
			for (const channel of channels.values()) {
				if (typeof channel.messages !== 'undefined' && channel.lastMessageId !== null) {
					try {
						const messages = await channel.messages.fetch({ limit: 1 });
						const lastMessage = messages.first();
						const theDate = new Date(lastMessage.createdTimestamp);
						const keyDate = `${theDate.getDate()}.${theDate.getMonth() + 1}.${theDate.getFullYear()}`;
						const m = `${keyDate}: ${lastMessage.guild.name}: #${lastMessage.channel.name}`;
						msg.push(m);
					} catch (err) {
						console.error(`Error fetching messages from channel ${channel.name}:`, err);
						await interaction.editReply(`Error fetching messages from channel ${channel.name}.`);
					}
				}
			}

			await interaction.editReply(`Last messages on this server:\n${msg.join("\n")}`);
		} catch (err) {
			console.error('Error executing lastmsg command:', err);
			await interaction.editReply('An error occurred while fetching the last messages.');
		}
	},
};
