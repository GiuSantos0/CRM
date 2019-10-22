import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import logo from '../../assets/img/dashplan.png';

    const useStyles = makeStyles(theme => ({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        logo: {
          height: '9vh',
          paddingTop: '2vh',
        },
        toolbar:{
            background: '#FFF',
            borderBottom: '4px solid #f8b100',
            color: '#4e4e4e',
        },
        flex:{
            flexGrow: 1,

        },

        
    }));

    export default function AppBarTop() {
        const classes = useStyles();
        const [auth] = React.useState(true);
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
 
      
        const handleMenu = event => {
          setAnchorEl(event.currentTarget);
        };
      
        const handleClose = () => {
          setAnchorEl(null);
        };

    return( 
       <div className={classes.root}>
      <AppBar position="fixed" display="flex">
        <Toolbar className={classes.toolbar}>
          <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <div className={classes.flex}>
            <img src={ logo } alt="logo dashplan" className={classes.logo}/>
          </div>
          {auth && (
            <div >
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleOutlined/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Minha Conta</MenuItem>
                <MenuItem onClick={handleClose}>Sair</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
