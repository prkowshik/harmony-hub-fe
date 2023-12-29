import axios from './axiosConfig';


export const authEndpoint = "https://accounts.spotify.com/authorize"
const tokenUrl = "https://accounts.spotify.com/api/token"
const redirectUri = "http://localhost:5173/home"
const clientId = "c4d1383bb0cb4ffca8944db1a84f6d83"
const clientSecret = "e780b8f9c32b46e085416ee3ca038b6a"
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

export const getAccessToken = async (code) =>{
    // let reqBody = {
    //       code: code,
    //       redirect_uri: redirectUri,
    //       grant_type: 'authorization_code'
    // }
    // let headers = {
    //     'content-type': 'application/x-www-form-urlencoded',
    //     Authorization: 'Basic ' + (encodeURIComponent(clientId + ':' + clientSecret))
    // }
        

    let reqBody = JSON.stringify({
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret
    });
    let headers = {
        "Access-Control-Allow-Headers": "*",
    }
    console.log("headers...", headers);

    const response = await axios.post("api/token", reqBody, {
        headers: headers,
      });

    // fetch(tokenUrl, {
    //     method: "POST",
    //     body: JSON.stringify({
    //         code: code,
    //         grant_type: 'authorization_code',
    //         redirect_uri: redirectUri,
    //         client_id: clientId,
    //         client_secret: clientSecret
    //     }),
    //     headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //       }
    //     })
    //     .then((response) => response.json())
    //     .then((json) => console.log(json));
    console.log(response);
    let access_token = response['access_token'];
    console.log(access_token);
    return access_token;
}
