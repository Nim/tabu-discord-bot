const { exec } = require('child_process');

// Decrypt the .env file using dotenvx and log the decrypted environment variables
exec('dotenvx run -- node -e "console.log(process.env)"', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error decrypting .env file: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`Decrypted environment variables: ${stdout}`);
});
