import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
} from '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  TableSelection,
  PagingPanel,
} from '@devexpress/dx-react-grid-material-ui';


export default () => {
  const [columns] = useState([
    { name: 'tarefa', title: 'Tarefa' },
    { name: 'obs', title: 'OBS' },
    { name: 'cliente', title: 'Cliente' },
    { name: 'prazo', title: 'Prazo' },
  ]);

  
    const [rows] = useState([
        {tarefa: 'Ligar para o cliente', obs:" ", cliente: "José", prazo: "Final de Novembro"},

    ]);
  const [selection, setSelection] = useState([]);

  return (
    <div>
      <span>
        Total rows selected:
        {' '}
        {selection.length}
      </span>
      <Paper>
        <Grid
          rows={rows}
          columns={columns}
        >
          <SelectionState
            selection={selection}
            onSelectionChange={setSelection}
          />
          <PagingState
            defaultCurrentPage={0}
            pageSize={6}
          />
          <IntegratedSelection />
          <IntegratedPaging />
          <Table />
          <TableHeaderRow />
          <TableSelection showSelectAll />
          <PagingPanel />
        </Grid>
      </Paper>
    </div>
  );
};



