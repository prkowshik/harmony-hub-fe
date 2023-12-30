import './App.css'
import Login from './components/LoginPage/Login'
import Home from './components/HomePage/Home'
import Playlist from './components/CreatePlaylist/Playlist'
import {spotifyAuthInfo, spotifyAcessTokens} from './utility/SpotifyAuth';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

export default function App() {
  const spotifyClient = new SpotifyWebApi();

  const [userData, setUserData] = useState();
  const [userName, setUserName] = useState("");
  const [userProfile, setUserProfile] = useState("");
  const [userprofileLink, setUserProfileLink] = useState("");
  

  useEffect(()=>{

    const handleCallback = async () => {
      const params = queryString.parse(window.location.search);
      const code = params.code;

      if(typeof(code) !== 'undefined'){
        console.log("called handleback");
        const authHeader = btoa(`${spotifyAuthInfo.clientId}:${spotifyAuthInfo.clientSecret}`);
        const data = {
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: spotifyAuthInfo.redirectUri,
        };

        try {
          const response = await axios.post(spotifyAuthInfo.tokenUrl, queryString.stringify(data), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${authHeader}`,
            },
          });

          const accessToken = response.data.access_token;
          console.log(accessToken);
          spotifyClient.setAccessToken(accessToken);
          spotifyAcessTokens['access_token'] = accessToken;

          spotifyClient.getMe().then((user)=>{
            console.log("My data...",user);
            setUserData(user);
            setUserName(user.display_name);
            if(user.images.length>0){
              setUserProfile(user.images[0].url);
            }
            setUserProfileLink(user.href);
        });
          
          
        } catch (error) {
          console.error('Error exchanging code for token:', error);
        }
      }
      
    };
    handleCallback();
    console.log("spotifyAcessTokens...",spotifyAcessTokens)
  });

  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="home" element={<Home/>} ></Route>
          <Route path="/create/playlist" element={<Playlist userName={userName} userProfile ={userProfile} userprofileLink = {userprofileLink} userData={userData} />} ></Route>
      </Routes>

    </div>
  )
}
