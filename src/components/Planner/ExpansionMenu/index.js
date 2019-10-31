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
import InsertLinkOutlinedIcon from '@material-ui/icons/InsertLinkOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#4e4e4e',
    fontFamily: 'Montserrat',
    color: '#FFF'
  },
  nested: {
    paddingLeft: theme.spacing(4),
    background: '#5f5f5f',
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
  Icon:{
    color: '#FFF',
  }
}));

export default function NestedList(props) {
  const classes = useStyles();
  const { active } = props;
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);

  const handleClick1 = () => {
    setOpen(!open);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
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
        </ListSubheader>
      }
      className={classes.root}
    >
    <ListItem button component="button" href="/DashPlanner">
      <ListItemIcon>
          <DashboardOutlined className={classes.Icon}/>
      </ListItemIcon>
      <ListItemText className={classes.tipografia} primary="Dashboard" />
    </ListItem>

    <ListItem button onClick={handleClick1} className={clsx(classes.listItem, {
      [classes.active]:active,
    })}>
      <ListItemIcon>
        <GroupOutlined className={classes.Icon}/>
      </ListItemIcon>
      <ListItemText primary="CRM" />
        {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List  disablePadding>
        <ListItem button="true" component="button" href="/Clientes" className={classes.nested}>
          <ListItemIcon>
            <StarBorder />
          </ListItemIcon> 
          <ListItemText primary="Clientes" />
        </ListItem>
      </List>
    </Collapse>
    
      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <LocalAtmOutlined className={classes.Icon}/>
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
      <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <InsertLinkOutlinedIcon className={classes.Icon}/>
        </ListItemIcon>
        <ListItemText className={classes.listItem} primary="Links úteis" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
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

      <ListItem button onClick={handleClick4}>
        <ListItemIcon>
          <ThumbUpAltOutlinedIcon className={classes.Icon} />
        </ListItemIcon>
        <ListItemText className={classes.listItem} primary="NPS" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open4} timeout="auto" unmountOnExit>
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