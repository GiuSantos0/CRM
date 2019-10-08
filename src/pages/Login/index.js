import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },

}));


export default function Login() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

    return(
      <div>
      <Card className={classes.card}>

        ola mundo
      </Card>

      </div>
    ) 
  }

