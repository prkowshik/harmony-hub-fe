
export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:5173"
const clientId = "c4d1383bb0cb4ffca8944db1a84f6d83"
const scopes = [
    "user-read-private",
    "user-read-email"
]

export const spotifyLoginUrl = `${authEndpoint}?client_id=${clientId}&response_type=code&scope=${scopes.join("%20")}&redirect_uri=${redirectUri}&show_dialog=true`

export const getTokenfromUrl = () =>{
    // console.log(window.location.search.substring(1).split("="))
    return window.location.search
    .substring(1)
    .split('&')
    .reduce((intial, item) =>{
        let parts = item.split("=");
        intial[parts[0]] = decodeURIComponent(parts[1])
        // console.log("inside..",intial)
        return intial
    }, {});

}