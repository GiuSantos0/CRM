import React from 'react';
import Body from '../../../components/Default/Body';
import Sidenav from '../../../components/Planner/Sidenav';
import CardTittleDark from '../../../components/Default/CardTittleDark';
import GroupOutlined from '@material-ui/icons/GroupOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Grid, CardContent } from '@material-ui/core';
import TableDevExpress from '../../../components/Default/TableDevExpress';

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
    card:{
        width: '100%',
    }
      }))

export default function Crm(){
    const classes = useStyles();

    const conteudo = (
        <>
            <Grid container sm={12}>
                <Grid item sm={12}></Grid>
                <CardTittleDark
                    title= "CRM" 
                    icon= {
                            <GroupOutlined 
                                    className={classes.IconCard}
                            />
                    }
                />
                <Card className={classes.card}>
                        <TableDevExpress/>
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
