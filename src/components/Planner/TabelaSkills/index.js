import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";

import {
  Grid,
  Table,
  TableHeaderRow,
  Toolbar,
  
} from "@devexpress/dx-react-grid-material-ui";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  th:{
    borderBottom: '3px solid #f8b100',
    backgroundColor: 'grey',
  }

    }))

export default function TableDevExpress(){
  // const [ linhas, setLinhas ] = useState([]);

  // useEffect(() => {
  //   async function loadRows(){
  //     const response = await api.get('/dashplan/backoffice/clientes.php');
  //     setLinhas(response.data);
  //   }
  //   loadRows();
  // }, []);
  // const dados = [];
  // linhas.map(linhas => ( dados = (linhas.cliente)));
  // console.log(dados);
  
  const [columns] = useState([
    { name: "skill", title: "Skills" },
    { name: "pf", title: "PF" },
    { name: "ca", title: "CA" },
    { name: "mediaGFAI", title: "Média GFAI" },
    { name: "mediaUnid", title: "Média Unid" },
  ]);
  
  const [rows] = useState([ 
    { skill: "Prospecção", pf: "3.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "Pré Venda/ Bitrix/ Processo", pf: "5.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "Clínica/ Venda", pf: "4.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "Coleta/ Envio das Info", pf: "5.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "Entrega", pf: "4.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "Plano de Ação", pf: "4.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "FUP Monitoramento", pf: "3.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "Análise Comportamental", pf: "4.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "Renovação", pf: "4.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
    { skill: "GFAI Seguros", pf: "2.0", ca: "0.0", mediaGFAI: "3.3" , mediaUnid: '2.3'},
  ]);
    const classes = useStyles();

    return (
      <Paper>
        <Grid rows={rows} columns={columns}>
          <Table/>
          <TableHeaderRow className={classes.th}/>
          <Toolbar />
        </Grid>
      </Paper>
    );
}
