# Using dotenvx to Encrypt the `.env` File

To use the `dotenvx` package to encrypt the `.env` file, follow these steps:

1. Install the `dotenvx` package:
   ```
   npm install dotenvx
   ```

2. Create a `.env` file in the root directory and add your environment variables.

3. Run the following command to encrypt the `.env` file:
   ```
   dotenvx encrypt .env
   ```

4. This will generate an encrypted `.env.enc` file.

5. To decrypt the `.env.enc` file, run the following command:
   ```
   dotenvx decrypt .env.enc
   ```

6. This will generate a decrypted `.env` file.

By following these steps, you can securely manage your environment variables using the `dotenvx` package.
