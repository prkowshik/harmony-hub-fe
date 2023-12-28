import './SideBar.css'
import CreateIcon from '@material-ui/icons/Create';
import MicIcon from '@material-ui/icons/Mic';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useState } from 'react';

function NavigationBar(){

    const handleItemClick = (key, link) =>{
        {window.location.pathname=link}
    }

    const NavBarData =[
        {
            title:'Create Playlist',
            icon:<CreateIcon/>,
            link:'/create/playlist'
        },
        {
            title:'Artists',
            icon:<MicIcon/>,
            link:'/artists'
        },
        {
            title:'Albums',
            icon:<LibraryMusicIcon/>,
            link:'/albums'
        },
        {
            title:'Podcast',
            icon:<MicIcon/>,
            link:'/podcasts'
        }
    ]

    
    return (
        <>
        <div className='navg-bar-container'>
            <div className='navg-bar-sub-cont'>
                <div className='nav-title-div'>
                    <img className="logo2" src="/logo-white.svg" width="30px"/>
                    <h1 className='nav-title-text'><b>HarmonyHub</b></h1>
                    <div className='navg-contents-div'>
                        <span className='discover'>Discover</span>
                        <div className='navg-contents-div2'>
                            <p className='home-text'>Home</p>
                        </div>
                        <div className='sidebar'>
                        <ul className='sidebarlist'>
                            {NavBarData.map((val, key)=>{
                                return (
                                    <li className="row" 
                                     id={window.location.pathname == val.link? "active": ""} key={key} onClick={() => handleItemClick(key, val.link)}>
                                        <span id="icon">{val.icon}  {val.title}</span>
                                    </li>

                                );
                            })}
                        </ul>
                        </div>
                    </div>
                </div>

            </div>
            
           

        </div>
        
    
    </>
    )
}

export default NavigationBar;