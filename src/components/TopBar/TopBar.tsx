import './TopBar.css'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function TopBar(){


    
    return (
        <>
        <div className='top-bar-div'>
            
            <Stack id="stack-id" direction="row" spacing={2}>
                <Chip id="chip-id" label="Spotify" />
                <Avatar id="avatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
        </div>
        
    
    </>
    )
};
