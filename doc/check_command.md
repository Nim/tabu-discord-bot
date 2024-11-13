# Check Command Documentation

## Description
The `check` command is used to verify if a user email exists by making a POST request to an external API.

## Usage
```
/check email:<email>
```

## Parameters
- `email`: The email address to check. This parameter is required.

## Example
```
/check email:user@example.com
```

## Response
- If the email exists, the bot will reply with a message indicating that the email exists.
- If the email does not exist, the bot will reply with a message indicating that the email does not exist.
- If an error occurs during the API request, the bot will reply with an error message.

## Notes
- The API URL is configured in the `.env` file using the `API_URL` variable.
- The command uses Axios to make the POST request to the API.
- The command includes CORS headers to ensure proper handling of cross-origin requests.
