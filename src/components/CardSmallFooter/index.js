import React from 'react'
import { Card, Grid, CardContent, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';

const useStyles = makeStyles(theme => ({
    margin:{
            margin:' 30px 10px 5px ',
    },
    headerAzul:{
        fontSize: '10px',
        padding: '10px 10px',
        fontWeight: '600',

    }
      }))

      export default function CardSmallFooter(props) { 
          const classes = useStyles();

          const StyledCardActions = styled( CardActions )`
          background-color: ${props => props.theme.background};
          color: ${props => props.theme.color};
          padding 20px;
        `;
  
        

    return(

                    <Grid item 
                    xs={12}
                    s={12}
                    sm={12}
                    lg={3}
                    xl={2}
                    >  
                 
                    <Card className={classes.margin2}>
                            <CardContent>
                                <h3>{props.conteudoCard}</h3>
                            </CardContent>
                            <StyledCardActions className={classes.headerAzul} theme={props.theme} disableTypography='true' >
                                <h2>{props.title}</h2>
                            </StyledCardActions>
                    </Card>
                </Grid>        
            
   )
}