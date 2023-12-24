import './App.css'
import Login from './components/login-new/Login'
import Home from './components/Home/Home'
import {Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
          <Route exact path="/" element={<Login/>}></Route>
          <Route path="home" element={<Home/>} ></Route>
      </Routes>

    </div>
  )
}
