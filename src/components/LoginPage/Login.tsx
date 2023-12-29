import './Login.css'
import {spotifyLoginUrl} from '../../utility/spotify-api';
import TextField from '@mui/material/TextField';


function Login(){

    return (
        <>
        <div className="login">
            
            <div className='title-div'>
                <p className='title-text'>HARMONY HUB</p>
                <img className="logo" src="/logo-white.svg" alt="" />
                <div className='sub-title-div'><p className='sub-title-text'>Your Personal Sound Sanctuary</p></div>
                <img src="/line.svg" alt="" />
            </div>

            <p className='Ellipse1'></p>
            <p className='Ellipse2'></p>

            <div className='login-frame1'>
                <div className='login-frame2'>
                    <div className='login-frame3'>
                    <div className='upper-section'>
                        <div className='login-text-div'><p className='login-text'>Login</p></div>
                        <div className='login-text-div'><p className='sub-text'>Glad you're back.!</p></div>
                        {/* <div className='credentials'>
                            <div className='username'><p className='username-text'>Username</p></div>
                        </div> */}
                        <form className='credentials'>
                        <TextField id="cred-bg" label="Username"  placeholder="Username" style = {{width: 300}}/>
                        <TextField id="cred-bg" label="Password" placeholder="Password" type="password" style = {{width: 300}}/>
                       
                        <div className='reminder-div'>
                            <input className="checkbox-div" type="checkbox" />
                            <p className='remember-me-text'>Remember me</p>
                        </div>
                        <div className='login-bt-fp'>
                            {/* <input className="login-bt-div"  type="button" value="Login" onClick={loginwithSpotify}  /> */}
                            <a className="login-bt-div" href={spotifyLoginUrl} id="signInButton">Login with Spotify</a>
                            <span className='fp-text'>Forgot password ?</span>
                        </div>

                            
                        </form>
                        <img src="/or-line.svg" width="305"></img>
                        <ul>
                           <li><img src="/google-icon.svg"></img></li> 
                           <li><img src="/fb-icon.svg"></img></li> 
                           <li><img src="/github.svg"></img></li> 
                        </ul>
                        
                    </div>
                    </div>
                </div>

            </div>
        </div>
    
    </>
    )
}

export default Login;