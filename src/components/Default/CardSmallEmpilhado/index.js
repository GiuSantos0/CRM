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

    },
    conteudoCard:{
        fontSize: '25px',
        marginTop: '3px',
        marginLeft: '10px',
    },
    inline:{
        display: '-webkit-box',
        textAlign: 'center',
    }
      }))

      export default function CardSmallFooter(props) { 
          const classes = useStyles();

          const StyledCardActions = styled( CardActions )`
          background-color: ${props => props.theme.background};
          color: ${props => props.theme.color};
          padding: 20px;
        `;

        const StyledCardContent = styled( CardContent )`
        color: ${props => props.theme.background};
        text-align: center;
        padding-right: 20px;
        padding-left: 20px;
      `;
  
        

    return(
                    <Grid item 
                    xs={12}
                    s={12}
                    sm={12}
                    lg={6}
                    xl={6}
                    >  
                 
                    <Card className={classes.margin2}>
                            <StyledCardContent  theme={props.theme} >
                                <div className={classes.inline} ><i className={classes.iconCard}> {props.iconCard} </i><h3 className={classes.conteudoCard}>{props.conteudoCard}</h3></div>
                            </StyledCardContent>
                            <StyledCardActions className={classes.headerAzul} theme={props.theme} disableTypography='true' >
                                <h2>{props.title}</h2>
                            </StyledCardActions>
                    </Card>
                </Grid>      
            
   )
}