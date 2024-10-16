const { Events } = require('discord.js');
const dayjs = require('dayjs');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(dayjs().toISOString(), `Ready! Logged in as ${client.user.tag}`);
	},
};
