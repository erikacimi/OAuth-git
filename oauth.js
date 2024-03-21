function loginWithGitHub() {
    const clientId = 'd434c0b2c9149466c5a2'; 
    const redirectUri = 'http://localhost/callback'; 
    const scope = 'user'; 
        const githubProfileUrl = 'https://github.com/settings/applications/2518885'; 
        window.open(githubProfileUrl, '_blank');
    }
