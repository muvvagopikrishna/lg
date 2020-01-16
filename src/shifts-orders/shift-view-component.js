import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import './shift-view-component.css';
import ClientListComponent from './client-list-component';
import ShiftViewColumn2Component from './shift-view-column-2-component';

export default function ShiftViewComponent(props) {
    return( 
        
            <Paper className="shift-view-container">
                <Box display="flex" className="shifts-view-container">
                    <ClientListComponent type={props.type} clientsData={props.clientsData}/>
                    <ShiftViewColumn2Component  type={props.type} data={props.data}/>
                </Box>
            </Paper>
        )
}