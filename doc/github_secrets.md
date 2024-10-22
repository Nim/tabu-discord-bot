# Using GitHub Secrets to Populate `process.env`

To use GitHub secrets to populate `process.env`, follow these steps:

1. Go to your GitHub repository settings.
2. Navigate to the "Secrets and variables" section.
3. Click on "New repository secret".
4. Add the following secrets:
   - `DISCORD_TOKEN`: Your Discord bot token.
   - `CLIENT_ID`: Your Discord client ID.
   - `GUILD_ID`: Your Discord guild ID.
   - `START_BOT`: Set to `true`.

5. In your GitHub Actions workflow, you can access these secrets using `${{ secrets.SECRET_NAME }}`.

For example, in a GitHub Actions workflow file (`.github/workflows/deploy.yml`), you can set the environment variables like this:

```yaml
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm install
      - name: Set environment variables
        run: |
          echo "DISCORD_TOKEN=${{ secrets.DISCORD_TOKEN }}" >> .env
          echo "CLIENT_ID=${{ secrets.CLIENT_ID }}" >> .env
          echo "GUILD_ID=${{ secrets.GUILD_ID }}" >> .env
          echo "START_BOT=true" >> .env
      - name: Start bot
        run: npm start
```

This will populate the `.env` file with the secrets from GitHub and start the bot.
