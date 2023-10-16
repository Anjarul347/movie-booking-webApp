import React from 'react';
import {AppBar} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';

const Header = () => {
  return (
    <div>
      <AppBar>
        <toolbar>
          <box width={'205'}>
            <MovieIcon/>
          </box>

        </toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
