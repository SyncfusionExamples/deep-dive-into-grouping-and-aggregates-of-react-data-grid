import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Group,
  Inject,
  GroupSettingsModel
} from '@syncfusion/ej2-react-grids';
import { Aggregate, AggregateColumnsDirective, AggregateColumnDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import data from './dataSource.json';
import './App.css';

const App: React.FC = () => {
  const groupOptions: GroupSettingsModel = {
    columns: ['ShipCountry']
  };
  function customAggregateFn(args: any): any {
    return args.result.filter((item: any) => item.ShipCountry === 'Germany').length;
  };
  return (
    <div style={{ margin: '10%', marginTop: '5%' }}>
      <GridComponent dataSource={data}
        allowGrouping={true}
        groupSettings={groupOptions}
        pageSettings={{ pageSize: 6 }}
      >
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Invoice ID' textAlign='Right' width='100' isPrimaryKey={true} />
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
          <ColumnDirective field='ShipCountry' headerText='Ship Country' />
          <ColumnDirective field='ShipName' headerText='Ship Name' />
          <ColumnDirective field='Freight' textAlign='Right' format='C2' width='200' />
        </ColumnsDirective>
        <AggregatesDirective>
          <AggregateDirective>
            <AggregateColumnsDirective>
              <AggregateColumnDirective format='C2' field='Freight' type='Sum' footerTemplate={(props: any) => <span>Sum: {props.Sum}</span>} />
              <AggregateColumnDirective field='ShipCountry' type='Custom' footerTemplate={(props: any) => <span>Custom: {props.Custom}</span>} customAggregate={customAggregateFn} />
            </AggregateColumnsDirective>
          </AggregateDirective>
          <AggregateDirective>
            <AggregateColumnsDirective>
              <AggregateColumnDirective field='Freight' type='Max' format='C2' footerTemplate={(props: any) => <span>Maximum: {props.Max}</span>} />
            </AggregateColumnsDirective>
          </AggregateDirective>
          <AggregateDirective>
            <AggregateColumnsDirective>
              <AggregateColumnDirective field='Freight' type='Sum' format='C2' groupFooterTemplate={(props: any) => <span>Sum: {props.Sum}</span>} />
            </AggregateColumnsDirective>
          </AggregateDirective>
          <AggregateDirective>
            <AggregateColumnsDirective>
              <AggregateColumnDirective field='Freight' type='Max' format='C2' groupCaptionTemplate={(props: any) => <span>Maximum: {props.Max}</span>} />
            </AggregateColumnsDirective>
          </AggregateDirective>
        </AggregatesDirective>
        <Inject services={[Group, Aggregate]} />
      </GridComponent>
    </div>
  );
}

export default App;