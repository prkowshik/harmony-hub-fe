import './Playlist.css'
import {useState} from 'react';
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {spotifyAcessTokens} from '../../utility/SpotifyAuth';

export default function Playlist(props){
  console.log("playlist...",spotifyAcessTokens);

    const [type, setType] = useState('');
    console.log(props.userName);
    const handleChange = (event: SelectChangeEvent) => {
      setType(event.target.value as string);
    };


    
    return (
        <>
        <SideBar/>
        <TopBar/>
        <div className='playlist-div'>
            <Stack direction="row" spacing={5} id="stack-tab">
                <TextField id="text-bg" label="Enter the Genre"  style = {{width: 300}}/>
                {/* <InputLabel id="dropdown-label">Age</InputLabel> */}
                <Select
                id="text-bg"
                value={type}
                label="Type"
                onChange={handleChange}
                style = {{width: 300}}
                > 
                <MenuItem value={"album"}>Album</MenuItem>
                {/* <MenuItem value={"artist"}>Artist</MenuItem> */}
                <MenuItem value={"track"}>Track</MenuItem>
                <MenuItem value={"show"}>Show</MenuItem>
                <MenuItem value={"audiobook"}>Audiobook</MenuItem>
                </Select>
                <TextField id="text-bg" label="Enter Playlist Name" style = {{width: 300}}/>
                <Button id="button-bg" variant="contained">Create Playlist</Button>
            </Stack>

            

        
                        
           
            
            
        </div>
        
    
    </>
    )
}
