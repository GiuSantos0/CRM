import React from 'react';
import './styles.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import CardContent from '@material-ui/core/CardContent';

import logo from '../../assets/img/dashplanbygfai.png';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 500,
    backgroundColor: '#ffffff6b'
  },

}));


export default function Login() {
  const classes = useStyles();
 
    return(
      <React.Fragment>
        <CssBaseline>
            <Container maxWidth="xs">
              <div className="content">
                <Card className={classes.card}>
                  <form action="">
                    <CardContent>
                      <img src={logo} alt="logo dashplan" className="logo"/>krai hein

                    </CardContent>


                  </form>
                </Card>
              </div>
            </Container>
        </CssBaseline>
      </React.Fragment>
    ) 
  }

