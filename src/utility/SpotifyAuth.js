export const spotifyAuthInfo ={
  authEndpoint:"https://accounts.spotify.com/authorize",
  tokenUrl:"https://accounts.spotify.com/api/token",
  redirectUri:import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
  clientId:import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  clientSecret:import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
  scopes : [
    "user-read-private",
    "user-read-email"
  ]

}

export const spotifyLoginUrl = `${spotifyAuthInfo.authEndpoint}?client_id=${spotifyAuthInfo.clientId}&response_type=code&scope=${spotifyAuthInfo.scopes.join("%20")}&redirect_uri=${spotifyAuthInfo.redirectUri}&show_dialog=true`

export const spotifyAcessTokens = {}
