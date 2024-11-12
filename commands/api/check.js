const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName('check')
    .setDescription('Check if a user email exists')
    .addStringOption(option =>
      option.setName('email')
        .setDescription('The email to check')
        .setRequired(true)),
  async execute(interaction) {
    const email = interaction.options.getString('email');
    const apiUrl = process.env.API_URL;

    try {
      const response = await axios.post(apiUrl+"user/check", { email }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });

      if (response.data.exists) {
        await interaction.reply(`The email ${email} exists.`);
      } else {
        await interaction.reply(`The email ${email} does not exist.`);
      }
    } catch (error) {
      console.error(error);
      await interaction.reply('An error occurred while checking the email.');
    }
  },
};
