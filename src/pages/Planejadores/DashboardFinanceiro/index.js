import React from 'react';
import Body from '../../../components/Default/Body';
import Sidenav from '../../../components/Planner/Sidenav';
import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import HourglassEmptyOutlinedIcon from '@material-ui/icons/HourglassEmptyOutlined';
import MoneyOffOutlinedIcon from '@material-ui/icons/MoneyOffOutlined';
import CardHeaderAzul from '../../../components/Default/CardHeaderAzul';
import CardHeaderAzulLarge from '../../../components/Default/CardHeaderAzulLarge';
import ChartBarra from '../../../components/Planner/ChartBarra';
import CardSmallFooter from '../../../components/Default/CardSmallFooter';
import CardTitleDark from '../../../components/Default/CardTittleDark';
import { Grid } from '@material-ui/core';

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
      

export default function DashboardPlanner() { 
        const classes = useStyles();

        const conteudo = (
                <>
                        <Grid container spacing={1}>
                                <CardTitleDark
                                        title= "DASHBOARD FINANCEIRO" 
                                        icon={
                                                <DashboardOutlinedIcon 
                                                        className={classes.IconCard}
                                                />
                                        }
                                />
                                <CardSmallFooter 
                                        theme={{
                                                background: '#28a745d6', 
                                                color: 'white'
                                        }}
                                        title="Cobranças Pagas"
                                        conteudoCard="R$100.000"
                                        iconCard=
                                        {
                                                <DoneOutlinedIcon className={classes.iconCardSmall}/>
                                        }

                                />
                                <CardSmallFooter
                                        theme={{
                                                background: '#17a2b8c2', 
                                                color: 'white'
                                        }}
                                        title="Cobranças Futuras"
                                        conteudoCard="R$150.000"
                                        iconCard={<HourglassEmptyOutlinedIcon className={classes.iconCardSmall}/>}

                                />
                                <CardSmallFooter
                                        theme={{
                                                background: '#dc3545d9', 
                                                color: 'white'
                                        }}
                                        title="Cobranças Vencidas"
                                        conteudoCard="R$10.560"
                                        iconCard={<MoneyOffOutlinedIcon className={classes.iconCardSmall}/>}
                                />
                                <CardSmallFooter
                                        theme={{
                                                background: 'grey', 
                                                color: 'white'
                                        }}
                                        title="Cobranças Acumuladas"
                                        conteudoCard="R$500.920"
                                        iconCard={<MoreHorizOutlinedIcon className={classes.iconCardSmall}/>}


                                />

                                <CardHeaderAzulLarge 
                                        title="graficogrande"
                                        conteudoCard={<ChartBarra/>}
                                />

                                <CardHeaderAzul
                                        title="grafico" 
                                />
                                <CardHeaderAzul
                                        title="grafico2"

                                />   
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