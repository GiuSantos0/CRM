import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import {
  SearchState,
  IntegratedFiltering,
  PagingState,
  IntegratedPaging,
  SortingState,
  IntegratedSorting,
} // State or Local Processing Plugins
from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  Toolbar,
  SearchPanel,
  PagingPanel,
  ColumnChooser,
  TableColumnVisibility
  
} from "@devexpress/dx-react-grid-material-ui";
import { makeStyles } from '@material-ui/core/styles';
import api from '../../../services/api';

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
    { name: "name", title: "Name" },
    { name: "sex", title: "Gênero" },
    { name: "city", title: "Cidade" },
    { name: "planejador", title: "Planner" },
    { name: "status", title: "Status" },
  ]);
  
  const [rows] = useState([ 
    { sex: "Female", name: "Sandra", city: "Las Vegas", planejador: "Fernanda" , status: 'Contrato Emitido'},
    { sex: "Male", name: "Paul", city: "Paris", planejador: "Robson", status: 'Contrato Emitido' },
    { sex: "Male", name: "Mark", city: "Paris", planejador: "Luis", status: 'Contrato Emitido' },
    { sex: "Male", name: "Paul", city: "Paris", planejador: "Robson", status: 'Contrato Emitido' },
    { sex: "Female", name: "Linda", city: "Austin", planejador: "Bruno", status: 'Contrato Emitido' },
    {
      sex: "Male",
      name: "Robert",
      city: "Las Vegas",
      planejador: "Isabela", status: 'Contrato Emitido'
    },
    { sex: "Female", name: "Lisa", city: "London", planejador: "Isabela", status: 'Contrato Emitido' },
    { sex: "Male", name: "Mark", city: "Chicago", planejador: "Bruno", status: 'Contrato Emitido' },
    {
      sex: "Male",
      name: "Thomas",
      city: "Rio de Janeiro",
      planejador: "Luis", status: 'Contrato Emitido'
    },
    { sex: "Male", name: "Robert", city: "Las Vegas", planejador: "Fernanda", status: 'Contrato Emitido' },
    { sex: "Female", name: "Betty", city: "Paris", planejador: "Fernanda", status: 'Contrato Emitido' },
    {
      sex: "Male",
      name: "Robert",
      city: "Los Angeles",
      planejador: "Luis", status: 'Contrato Emitido'
    },
    {
      sex: "Male",
      name: "William",
      city: "Los Angeles",
      planejador: "Isabela", status: 'Contrato Emitido'
    },
    { sex: "Male", name: "Mark", city: "Austin", planejador: "Robson", status: 'Contrato Emitido' },

  ]);

    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(6);
    const [pageSizes] = useState([6, 12, 24]);
    const [sorting, setSorting] = useState([{ columnName: 'name', direction: 'asc' }]);
    const [defaultHiddenColumnNames] = useState(['sex', 'city'])

      const classes = useStyles();

    return (
      <Paper>
        <Grid rows={rows} columns={columns}>
          <PagingState
            currentPage={currentPage}
            onCurrentPageChange={setCurrentPage}
            pageSize={pageSize}
            onPageSizeChange={setPageSize}
          />
          <SearchState/>
          <IntegratedFiltering />
          <IntegratedPaging />
          <SortingState
            sorting={sorting}
            onSortingChange={setSorting}
          />
          <IntegratedSorting />
          <Table/>
          <TableHeaderRow className={classes.th} showSortingControls/>
          <TableColumnVisibility
            defaultHiddenColumnNames={defaultHiddenColumnNames}
          />
          <Toolbar />
          <ColumnChooser/>
          <SearchPanel/>
          <PagingPanel
            pageSizes={pageSizes}

          />
        </Grid>
      </Paper>
    );
}
