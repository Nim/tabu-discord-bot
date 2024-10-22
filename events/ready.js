const { Events } = require('discord.js');
const dayjs = require('dayjs');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		try {
			// Log the bot's readiness and the user tag
			console.log(dayjs().toISOString(), `Ready! Logged in as ${client.user.tag}`);
		} catch (error) {
			// Log the error for debugging purposes
			console.error('Error in ClientReady event:', error);
		}
	},
};
