import React from 'react'
import { Card, Grid, CardContent, CardHeader, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    margin:{
            margin:' 30px 10px 5px ',
    },
    margin2:{
    },
    headerAzul:{
        backgroundColor: '#acb9ca',
        fontSize: '10px',
        padding: '3px 10px',
        fontWeight: '600',
        color: '#000054',

    },
    button:{
        float: "right",
        height: "20px",
        fontSize: "10px",
    }
      }))
  
      
export default function CardHeaderAzulLarge(props) { 
    const classes = useStyles();

    return(
                <Grid item   
                xs={12}
                s={12}
                sm={12}
                lg={12}
                xl={12}
                >  
                    <Card className={classes.margin2}>
                            <CardHeader 
                                className={classes.headerAzul} 
                                title={props.title} 
                                subheader={
                                    <Button variant="contained" href={props.href} className={classes.button}>
                                    {props.buttonName}
                                    </Button>
                                }
                                disableTypography='true' >
                    
                            </CardHeader>
                            <CardContent>
                                {props.conteudoCard}
                            </CardContent>
                                {props.conteudoCard2}
                    </Card>
                </Grid>                   
            
   )
}