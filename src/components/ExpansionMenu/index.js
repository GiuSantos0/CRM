import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LocalAtmOutlined from '@material-ui/icons/LocalAtmOutlined';
import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import GroupOutlined from '@material-ui/icons/GroupOutlined';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import clsx from 'clsx';
import PropTypes from 'prop-types';



const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    fontFamily: 'Montserrat',
  },
  nested: {
    paddingLeft: theme.spacing(4),
    background: '#eaeaea',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
    zIndex: 10,
  },
  tipografia:{
    fontFamily: 'Montserrat',
    fontWeight: 900,
  },
  listItem: {
    fontFamily: 'Montserrat',
    fontWeight: 900,
  },
  active:{
    backgroundColor: '#f8b100',
  },
}));

export default function NestedList(props) {
  const classes = useStyles();
  const { active } = props;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClick1 = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  NestedList.propTypes = {
    active: PropTypes.bool,
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menu
        </ListSubheader>
      }
      className={classes.root}
    >
    <ListItem button>
      <ListItemIcon>
          <DashboardOutlined />
      </ListItemIcon>
      <ListItemText className={classes.tipografia} primary="Dashboard" />
    </ListItem>

    <ListItem button onClick={handleClick1} className={clsx(classes.listItem, {
      [classes.active]: active,
    })}>
      <ListItemIcon>
        <GroupOutlined />
      </ListItemIcon>
      <ListItemText primary="CRM" />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon> 
          <ListItemText primary="Clientes" />
        </ListItem>
      </List>
    </Collapse>
    
      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <LocalAtmOutlined />
        </ListItemIcon>
        <ListItemText className={classes.listItem} primary="Financeiro" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}