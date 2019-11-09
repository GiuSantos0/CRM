import React from 'react';
import Body from '../../../components/Default/Body';
import Sidenav from '../../../components/Planner/Sidenav';
import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DoneOutlinedIcon from '@material-ui/icons/DoneOutlined';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import CardHeaderAzul from '../../../components/Default/CardHeaderAzul';
import CardHeaderAzulLarge from '../../../components/Default/CardHeaderAzulLarge';
import ChartRadar from '../../../components/Planner/ChartRadar';
import CardSmallFooter from '../../../components/Default/CardSmallEmpilhado';
import CardTitleDark from '../../../components/Default/CardTittleDark';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import PersonAddDisabledOutlinedIcon from '@material-ui/icons/PersonAddDisabledOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import TabelaSkills from '../../../components/Planner/TabelaSkills';
import Tasks from '../../../components/Planner/TasksPlanner';
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
      

export default function DashboardPlannerComercial() { 
        const classes = useStyles();

        const conteudo = (
                <>
                        <Grid container spacing={1}>
                                <CardTitleDark
                                        title= "DASHBOARD COMERCIAL" 
                                        icon={
                                                <DashboardOutlinedIcon 
                                                        className={classes.IconCard}
                                                />
                                        }
                                />
                                <CardHeaderAzul
                                        title="Skills" 
                                        conteudoCard={
                                            <ChartRadar/> 
                                        }
                                        conteudoCard2={                                            <TabelaSkills/>}

                                />
                                        
                            <Grid item 
                            xs={12}
                            s={12}
                            sm={12}
                            lg={6}
                            xl={6}
                            > 
                            <Grid container spacing={1}>

                                <CardSmallFooter 
                                        theme={{
                                                background: '#28a745d6', 
                                                color: 'white'
                                        }}
                                        title="Clinicas Realizadas"
                                        conteudoCard="2"
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
                                        title="Clinicas Agendadas"
                                        conteudoCard="10"
                                        iconCard={<EventAvailableOutlinedIcon className={classes.iconCardSmall}/>}

                                />
                                <CardSmallFooter
                                        theme={{
                                                background: '#dc3545d9', 
                                                color: 'white'
                                        }}
                                        title="Junk"
                                        conteudoCard="7"
                                        iconCard={<DeleteOutlinedIcon className={classes.iconCardSmall}/>}
                                />
                                <CardSmallFooter
                                        theme={{
                                                background: 'grey', 
                                                color: 'white'
                                        }}
                                        title="Agendamento Solicitado"
                                        conteudoCard="6"
                                        iconCard={<DateRangeOutlinedIcon className={classes.iconCardSmall}/>}


                                />

                                <CardSmallFooter
                                        theme={{
                                                background: '#28a745d6', 
                                                color: 'white'
                                        }}
                                        title="Clientes Ativos"
                                        conteudoCard="6"
                                        iconCard={<EmojiPeopleOutlinedIcon className={classes.iconCardSmall}/>}
                                />

                                
                                <CardSmallFooter
                                        theme={{
                                                background: '#dc3545d9', 
                                                color: 'white'
                                        }}
                                        title="Clientes Inativos"
                                        conteudoCard="6"
                                        iconCard={<PersonAddDisabledOutlinedIcon className={classes.iconCardSmall}/>}


                                />

                                <CardHeaderAzulLarge 
                                        title="Tarefas"
                                        conteudoCard2={<Tasks/>}
                                        buttonName='Mais Tarefas'
                                />
                            </Grid>  
                            </Grid> 
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