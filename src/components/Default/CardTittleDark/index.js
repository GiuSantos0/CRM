import React from 'react'
import { Card, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    margin:{
            margin:' 15px 0px 0px ',
    },

    headerAzul:{
        backgroundColor: '#acb9ca',
        fontSize: '10px',
        padding: '3px 10px',
        fontWeight: '600',
        color: '#000054',

    },
    headerCard: {
        padding: '1%',
        backgroundColor: '#4e4e4e',
        color: '#FFF',
        fontWeight: '300',
        display:"flex",
        borderBottom: '5px solid #F8B100',
},

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
            <Card className={classes.margin}>
                    <Typography className={classes.headerCard} >
                        {props.icon}
                            <h3>{props.title}</h3>
                    </Typography>
            </Card>
        </Grid>                   
            
   )
}