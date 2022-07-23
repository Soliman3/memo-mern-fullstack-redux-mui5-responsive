import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import memories from '../../images/memories.png';


export default function SearchAppBar() {
  return (
    
      <AppBar position="fixed"  >
        <Toolbar>
          
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            align='left'
          >
            Memories App
          </Typography>
          <img src={memories} alt="Memories" width='5%' height='5%' align="center"/>
          
        </Toolbar>
      </AppBar>
   
  );
}
