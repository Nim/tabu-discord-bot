const { SlashCommandBuilder } = require('@discordjs/builders');
const axios = require('axios');

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
    const apiUrl = process.env.API_URL+"user/check";

    try {
			await interaction.deferReply();
			await interaction.editReply(`Fetching data...`);

      const response = await axios.post(apiUrl, { email }, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });

      if (response.data.response.exists) {
        await interaction.editReply(`The email ${email} exists. Unique_id is ${response.data.response.name}`);
      } else {
        await interaction.editReply(`The email ${email} does not exist.`);
      }
    } catch (error) {
      console.error(error);
      await interaction.editReply('An error occurred while checking the email.');
    }
  },
};
