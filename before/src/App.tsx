import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Group,
  Inject
} from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './App.css';

const App: React.FC = () => {
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        allowGrouping={true}
        pageSettings={{ pageSize: 6 }}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='100' />
        </ColumnsDirective>
        <Inject services={[Group]} />
      </GridComponent>
    </div>
  );
}

export default App;