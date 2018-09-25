import React from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
};


function Navbar(props){

  return (
    <div>
      <AppBar position="static" color="default" style={{backgroundColor: 'green'}} >
        <Toolbar>
          <Typography variant="title" color="inherit" style={{fontFamily:'Comic Sans MS', color:'yellow'}}>
            Taco Maker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
