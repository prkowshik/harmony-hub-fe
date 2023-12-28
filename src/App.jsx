import './App.css'
import Login from './components/LoginPage/Login'
import Home from './components/HomePage/Home'
import Playlist from './components/CreatePlaylist/Playlist'
import {Routes, Route} from 'react-router-dom';
import {getTokenfromUrl} from './utility/spotify-api';
import { useEffect, useState } from 'react';

export default function App() {
  useEffect(()=>{
    console.log("This is what we derived from URL: ", getTokenfromUrl())
    const spotifyToken = getTokenfromUrl().code;
    console.log(spotifyToken)
   

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
