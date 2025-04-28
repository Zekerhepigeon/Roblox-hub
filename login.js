// login.js

// Your Discord App Client ID
const clientId = '1366416901550510180';

// Your website redirect URL (must match your Discord Developer Portal settings)
const redirectUri = 'http://localhost:3000/callback.html';  // ✅ Fixed for localhost

// Function to redirect the user to Discord OAuth2 login
function loginWithDiscord() {
    const discordAuthUrl = `https://discord.com/oauth2/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=identify`;
    
    // Redirect user to Discord login
    window.location.href = discordAuthUrl;
}

// Wait for the page to load, then attach the click event
document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('discord-login');
    
    if (loginButton) {
        loginButton.addEventListener('click', function (e) {
            e.preventDefault(); // stop normal link behavior
            loginWithDiscord();
        });
    }
});
