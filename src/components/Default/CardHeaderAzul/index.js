import React from 'react'
import { Card, Grid, CardContent, CardHeader } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    margin:{
    },
    margin2:{
    },
    headerAzul:{
        backgroundColor: '#acb9ca',
        fontSize: '10px',
        padding: '3px 10px',
        fontWeight: '600',
        color: '#000054',

    }
      }))
  
      
export default function CardHeaderAzul(props) { 
    const classes = useStyles();

    return(
            <>
                <Grid item   
                xs={12}
                s={12}
                sm={12}
                lg={6}
                xl={6}
                >  
                    <Card className={classes.margin2}>
                            <CardHeader className={classes.headerAzul} title={props.title} disableTypography='true' />
                            <CardContent>
                                {props.conteudoCard}
                            </CardContent>
                                {props.conteudoCard2}
                    </Card>
                </Grid>                   
            </>
   )
}