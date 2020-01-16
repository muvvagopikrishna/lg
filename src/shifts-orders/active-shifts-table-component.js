import { AgGridReact } from 'ag-grid-react';
import React, {Component} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import {getShifts} from './actions/shifts-orders-actions'
import LgTable from '../LgTable';
import DateContextHOC from './../context/DateContextHOC';

class ActiveShiftsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: props.tableHeaders,
      rowData: []
    }
  }
  componentDidMount(){;
    let {date} = this.props && this.props.context;
    getShifts(date).then( res => {
      this.setState({rowData : res.data.response})
      this.props.setDataForClientsInfo(res.data.response);
    })
  }
  render() {
    return (
      <LgTable>
        <div className="ag-theme-balham" style={{ height: '200px', width: '100%' }}>
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            pagination={true}
          >
          </AgGridReact>
        </div>
      </LgTable>
    );
  }
}

export default DateContextHOC(ActiveShiftsList);