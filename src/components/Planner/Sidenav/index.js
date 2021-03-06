import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { Grid } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import ExpansionMenu from '../ExpansionMenu';
import { Main, Saudacao } from './styles';
import { logout } from "../../../services/auth";
import { useHistory } from "react-router-dom";
import NameUser from '../../Default/NameUser';

import logo from '../../../assets/img/dashplan.png';

const drawerWidth = 0;

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,

  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: 230,
      flexShrink: 0,

    },
  },
  appBar: {
    height: '61px',
    marginLeft: 200,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    background: '#FFF',
    borderBottom: '4px solid #f8b100',
    color: '#4e4e4e',
    },
    menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        display: 'none',
    },
    },
    toolbar: theme.mixins.toolbar, 
    logo: {
        height: '9vh',
        paddingTop: '2.3vh',
        marginLeft: '10px'
        },
    drawerPaper: {
      width: 220,
      zIndex: 0,
      backgroundColor: '#4e4e4e'

    },
    content: {
        flexGrow: 1,
        marginLeft: '230px',
        paddingRight: '10px',
    },
    flex:{
        flexGrow: 1,

    },
    
    }));

function Sidenav(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [auth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    let history = useHistory();

    const handleLogout = e => {
      logout();
      history.push("/");
    };

    const handleOpenUser = e => {
      setAnchorEl(e.currentTarget);
    };
  
    const handleFechar = () => {
      setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    
    const drawer = (
        <div>
          <div className={classes.toolbar}>
            <img src={ logo } alt="logo dashplan" className={classes.logo}/>
          </div>
          <Divider />
          <List button>
                <ExpansionMenu />
          </List>
          {/* <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
                </ListItem>
        ))}
      </List> */}
    </div>
  );

  return (
    <div className={classes.root}>
    <Grid container  
      className= {classes.root}
      direction="row"
      zeroMinWidth

      >
      <CssBaseline />
      <Grid item sm={12}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.flex}>
            <img src={ logo } alt="logo dashplan" className={classes.logo}/>
          </Typography>
          {auth && (
            <div >
            <Saudacao>Olá, Planejador!<NameUser/></Saudacao>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUser}
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
                onClose={handleFechar}
              >
                <MenuItem onClick={handleFechar}>Minha Conta</MenuItem>
                <MenuItem history={props}onClick={handleLogout}>Sair</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
        </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
          </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <Main className={classes.content}>
       <div className={classes.toolbar} />
          <Grid item
            className={classes.root}
           sm={12}
           justify="flex-end"
          
          >
           { props.Component }
          </Grid>
      </Main>
      </Grid>
      </Grid>
      </div>
  );
}

Sidenav.propTypes = {

  container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Sidenav;