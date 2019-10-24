import React from 'react';
import Body from '../../../components/Body';
import Sidenav from '../../../components/Sidenav';
import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import CardHeaderAzul from '../../../components/CardHeaderAzul';
import CardHeaderAzulLarge from '../../../components/CardHeaderAzulLarge';
import ChartBarra from '../../../components/ChartBarra';
import CardSmallFooter from '../../../components/CardSmallFooter';
import CardTitleDark from '../../../components/CardTittleDark'
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
          }))
      

export default function DashboardPlanner() { 
        const classes = useStyles();

        const conteudo = (

                <>
                        <CardTitleDark
                                title= "DASHBOARD" 
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

                        />
                        <CardSmallFooter
                                theme={{
                                        background: '#17a2b8c2', 
                                        color: 'white'
                                }}
                                title="Cobranças Futuras"
                        />
                        <CardSmallFooter
                                theme={{
                                        background: '#dc3545d9', 
                                        color: 'white'
                                }}
                                title="Cobranças Vencidas"

                        />
                        <CardSmallFooter
                                theme={{
                                        background: 'grey', 
                                        color: 'white'
                                }}
                                title="Cobranças Acumuladas"
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
                        <CardHeaderAzul/>
                        <CardHeaderAzul/>     
                </>
        );

    return( 
        <div>
                <Body background=''/>
                        <Sidenav Component={conteudo}/>
        </div>
        );
};