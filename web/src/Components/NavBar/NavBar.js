import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h1" color="inherit">
                Prometheus Alert Manager Router
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;
