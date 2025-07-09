const { SlashCommandBuilder } = require('discord.js');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../../config.js');

passport.use(new GoogleStrategy({
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: config.googleCallbackUrl,
  },
  function(accessToken, refreshToken, profile, done) {
    // Handle the authenticated user
    return done(null, profile);
  }
));

module.exports = {
  data: new SlashCommandBuilder()
    .setName('login')
    .setDescription('Authenticate with Google'),
  async execute(interaction) {
    const authURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${config.googleClientId}&response_type=code&scope=openid%20email%20profile&redirect_uri=${config.googleCallbackUrl}&state=${interaction.user.id}`;
    await interaction.reply({ content: `Please go to the following URL to authenticate with Google: ${authURL}`, ephemeral: true });
  },
};
