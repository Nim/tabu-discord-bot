const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lastmsg')
		.setDescription('Last messages on server.'),
	async execute(interaction) {
		let msg=[];

		await interaction.deferReply();
		await interaction.editReply(`Last messages on this server:`);
		interaction.guild.channels.fetch()
		.then(channels => channels.forEach(function(channel){
			if(typeof channel.messages !== 'undefined' && channel.lastMessageId !== null){
			channel.messages.fetch({ limit: 1 })
			.then(mess => {
				const lastMessage = mess.first();
				const theDate = new Date(lastMessage.createdTimestamp);
				const keyDate = theDate.getDate()+"."+(theDate.getMonth()+1)+"."+theDate.getFullYear();
				const m = keyDate+": "+lastMessage.guild.name+": #"+lastMessage.channel.name;
				msg.push(m);
				return msg;
			}).then(msg => interaction.editReply(`Last messages on this server:\n`+msg.join("\n")))
			.catch(err => console.error(err));
		}
		})
		)
		.catch(console.error);
	},
};
