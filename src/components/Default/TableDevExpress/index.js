import React from 'react';
import DataGrid, {
  Column,
  Editing,
  Popup,
  Paging,
  Lookup,
  Position,
  Form,
  SearchPanel,
  Pager, 
  ColumnChooser, 
  ColumnFixing,
  Button
} from 'devextreme-react/data-grid';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';


import { Item } from 'devextreme-react/form';
import { employees, states } from './data.js';

const pageSizes = [10, 25];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ClinicaClick = this.ClinicaClick.bind(this);
  }
    ClinicaClick() {
    return <a href="/Clientes2"></a>;
  }
  render() {
    return (
      <div id={'data-grid-demo'}>
        <DataGrid
          dataSource={employees}
          keyExpr={'ID'}
        >
          <ColumnChooser enabled={true} />
          <ColumnFixing enabled={true} icon='search' />
          <SearchPanel visible={true} highlightCaseSensitive={true}/>
          <Paging enabled={true} />
          <Editing
            mode={'popup'}
            allowUpdating={true}>
            <Popup title={'Editar Informações'} showTitle={true} width={700} height={525}>
              <Position my={'top'} at={'top'} of={window} />
            </Popup>
            <Form>
              <Item itemType={'group'} colCount={2} colSpan={2}>
                <Item dataField={'Nome'} />
                <Item dataField={'Sobrenome'} />
                <Item dataField={'UltimoContato'} />
                <Item dataField={'Cargo'} />
                <Item dataField={'AssContrato'} />
                <Item
                  dataField={'OBS'}
                  colSpan={2}
                />
              </Item>

              <Item itemType={'group'} caption={'Moradia'} colCount={2} colSpan={2}>
                <Item dataField={'StateID'} />
                <Item dataField={'Endereco'} />
              </Item>
            </Form>
          </Editing>
          <Column dataField={'Nome'} caption={'Nome'} />
          <Column dataField={'Sobrenome'} />
          <Column dataField={'UltimoContato'} dataType={'date'} />
          <Column dataField={'Cargo'} width={170} visible={false}/>
          <Column dataField={'AssContrato'} dataType={'date'} visible={false}/>
          <Column dataField={'StateID'} caption={'Estado'} width={125}>
            <Lookup dataSource={states} valueExpr={'ID'} displayExpr={'Name'} />
          </Column>
          <Column dataField={'Endereco'} caption={'Endereço'} visible={false} />
          <Column dataField={'OBS'} visible={false} />
          <Column 
            dataField={'Editar'}   
            visible={true} 
            width={55} 
            type={'buttons'}
          >
            <Button name="edit"
              icon="edit"
            />
          </Column>
          <Column 
            dataField={'Clinica'}   
            visible={true} 
            width={65} 
            type={'buttons'}
          >
            <Button type="button"> 
              <a href="/?" className="dx-datagrid dx-link">
                <LocalHospitalOutlinedIcon/>
              </a>
            </Button>
          </Column>
  

          <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
          <Paging defaultPageSize={10} />
        </DataGrid>
      </div>
    );
  }
}

export default App;
