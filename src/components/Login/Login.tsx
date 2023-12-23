import './Login.css'

function Login(){

    const highlights = ['Craft Playlists', 'Real-Time Preview', 'Spotify Integration']
    return (
        <>
        <div className="login-left-div">
            <div className="logoipsum">
                <img src="/favicon.svg"/>
                <p className="HarmonyHub">HarmonyHub</p>

                <p className="Ellipse"></p>
                <p className="tagLine">Your Personal Sound <br></br> Sanctuary - Craft Playlists, Find Balance</p>
                <ul className="ul-list">
                    {highlights.map(highlight =>(
                        
                        <li key={highlight} className="bullet-list">
                            <img src="/tick.svg"></img>
                            {highlight}
                        </li>
                    ))}
                </ul>
                <p className="Ellipse2"></p>
                <p className="Ellipse3"></p>
            
            </div>
        
        </div>
        <div className="login-right-div">

        </div>
    
    </>
    )
}

export default Login;