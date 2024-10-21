const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');

async function deployCommands(token, clientId, guildId = null) {
	const commands = [];
	const foldersPath = path.join(__dirname, 'commands');
	const commandFolders = fs.readdirSync(foldersPath);

	for (const folder of commandFolders) {
		const commandsPath = path.join(foldersPath, folder);
		const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

		for (const file of commandFiles) {
			const filePath = path.join(commandsPath, file);
			try {
				const command = require(filePath);
				if ('data' in command && 'execute' in command) {
					commands.push(command.data.toJSON());
				} else {
					console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
				}
			} catch (error) {
				console.error(`Error loading command at ${filePath}:`, error);
			}
		}
	}

	const rest = new REST().setToken(token);
	const route = guildId ? Routes.applicationGuildCommands(clientId, guildId) : Routes.applicationCommands(clientId);

	try {
		await rest.put(route, { body: commands });
		console.log('Successfully deployed commands.');
	} catch (error) {
		console.error('Error deploying commands:', error);
	}
}

module.exports = { deployCommands };
