import React from 'react';
import Body from '../../../components/Default/Body';
import Sidenav from '../../../components/Planner/Sidenav';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
// import CardSmallFooter from '../../../components/Default/CardSmallEmpilhado';
import CardTitleDark from '../../../components/Default/CardTittleDark';

import { Grid, Card } from '@material-ui/core';

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
        iconCardSmall: {
                fontSize: '40px',
                paddingTop: '2%',
                marginLeft: '20px',
        },
        content: {
                flexGrow: 1,
                marginLeft: '230px'
            },
          }))
      

export default function Tasks() { 
        const classes = useStyles();

        const conteudo = (
                <>
                        <Grid container spacing={1}>
                            <CardTitleDark
                                title= "Tasks" 
                                icon= {
                                        <AssignmentTurnedInOutlinedIcon 
                                                className={classes.IconCard}
                                        />
                                }
                            />
                            <Card className={classes.card}>

                            </Card>
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