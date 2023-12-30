import './App.css'
import Login from './components/LoginPage/Login'
import Home from './components/HomePage/Home'
import Playlist from './components/CreatePlaylist/Playlist'
import {spotifyAuthInfo} from './utility/SpotifyAuth';
import {Routes, Route} from 'react-router-dom';
import axios from 'axios';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

export default function App() {
  const spotifyClient = new SpotifyWebApi();
  const [spotifyAccessToken, setSpotifyAccessToken] = useState("");


  useEffect(()=>{
    const handleCallback = async () => {
      const params = queryString.parse(window.location.search);
      const code = params.code;

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
        setSpotifyAccessToken(accessToken);
        // Step 4: Use the access token (e.g., make API requests to Spotify)
        
        spotifyClient.setAccessToken(accessToken);
      } catch (error) {
        console.error('Error exchanging code for token:', error);
      }
    };

    handleCallback();
    
    spotifyClient.getMe().then((user)=>{
        console.log("My data...",user);
    });
   

  });

  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="home" element={<Home/>} ></Route>
          <Route path="/create/playlist" element={<Playlist/>} ></Route>
      </Routes>

    </div>
  )
}
