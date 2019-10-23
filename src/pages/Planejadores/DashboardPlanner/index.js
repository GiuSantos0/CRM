import React from 'react';
import Body from '../../../components/Body';
import Sidenav from '../../../components/Sidenav';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Typography, Grid } from '@material-ui/core';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import CardHeaderAzul from '../../../components/CardHeaderAzul';

const useStyles = makeStyles(theme => ({
        root: {
          display: 'flex',
        },
        headerCard: {
                padding: '1%',
                backgroundColor: '#4e4e4e',
                color: '#FFF',
                fontWeight: '300',
                display:"flex",
                borderBottom: '5px solid #F8B100',
        },
        IconCard:{
                color:'#F8B100',
                paddingRight: '5px',
                fontSize: '20px',
                fontWeight: '600',
        },


        margin:{
                margin:' 30px 10px 5px ',
        },
        margin2:{
                margin:' 13px 10px 5px 10px',
        }
          }))
      

export default function DashboardPlanner() { 
        const classes = useStyles();

        const conteudo = (

                <>
                <Grid 
                        item   
                        xs={12}
                        s= {12}
                        sm={12}
                        lg={12}
                        xl={12}
                >
                        <Card className={classes.margin}>
                                <Typography className={classes.headerCard} >
                                        <DashboardOutlinedIcon className={classes.IconCard}/>
                                        <h3>DASHBOARD</h3>
                                </Typography>
                        </Card>
                </Grid>
                <Grid container spacing={0}>
                        <CardHeaderAzul
                                title="grafico"
                        />
                        <CardHeaderAzul
                                title="grafico2"

                        />     
                </Grid>
                <Grid container spacing={0}>
                        <CardHeaderAzul/>
                        <CardHeaderAzul/>     
                </Grid>
                </>
        );

    return( 
        <div>
                <Body background=''/>
                        <Sidenav Component={conteudo}/>
        </div>
        );
};