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
} from 'devextreme-react/data-grid';

import { Item } from 'devextreme-react/form';
import { employees, states } from './data.js';

const pageSizes = [10, 25];

class App extends React.Component {
  render() {
    return (
      <div id={'data-grid-demo'}>
        <DataGrid
          dataSource={employees}
          keyExpr={'ID'}
          showBorders={true}
        >
          <SearchPanel visible={true} highlightCaseSensitive={true} />
          <Paging enabled={false} />
          <Editing
            mode={'popup'}
            allowUpdating={true}>
            <Popup title={'Employee Info'} showTitle={true} width={700} height={525}>
              <Position my={'top'} at={'top'} of={window} />
            </Popup>
            <Form>
              <Item itemType={'group'} colCount={2} colSpan={2}>
                <Item dataField={'FirstName'} />
                <Item dataField={'LastName'} />
                <Item dataField={'Prefix'} />
                <Item dataField={'BirthDate'} />
                <Item dataField={'Position'} />
                <Item dataField={'HireDate'} />
                <Item
                  dataField={'Notes'}
                  editorType={'dxTextArea'}
                  colSpan={2}
                  editorOptions={{ height: 100 }} />
              </Item>

              <Item itemType={'group'} caption={'Home Address'} colCount={2} colSpan={2}>
                <Item dataField={'StateID'} />
                <Item dataField={'Address'} />
              </Item>
            </Form>
          </Editing>
          <Column dataField={'Prefix'} caption={'Title'} width={70} />
          <Column dataField={'FirstName'} />
          <Column dataField={'LastName'} />
          <Column dataField={'BirthDate'} dataType={'date'} />
          <Column dataField={'Position'} width={170} />
          <Column dataField={'HireDate'} dataType={'date'} />
          <Column dataField={'StateID'} caption={'State'} width={125}>
            <Lookup dataSource={states} valueExpr={'ID'} displayExpr={'Name'} />
          </Column>
          <Column dataField={'Address'} visible={false} />
          <Column dataField={'Notes'} visible={false} />

          <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
          <Paging defaultPageSize={10} />
        </DataGrid>
      </div>
    );
  }
}

export default App;
