import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import ActiveShiftsComponent from './active-shifts-component';
import CompletedShiftsComponent from './completed-shifts-component';
import './shifts-orders-nav-component.css'

export default function ShiftsOrdersNavComponent(props) {
    return( 
            <Router>
                    <div className="shifts-orders-navigation-container">
                        <List className="navbar-nav mr-auto">
                            <Box display="flex" p={1} justifyContent="flex-start" className="shifts-orders-nav-links" bgcolor="background.paper">
                                <Link to={'/shiftsorders/activeshifts'} className="nav-link"> Active Shifts </Link>
                                <Link  to={'/shiftsorders/completed'} className="nav-link">Completed Shifts</Link>
                            </Box>
                        </List>
                            <Route path='/shiftsorders/activeshifts' component={ActiveShiftsComponent} />
                            <Route path='/shiftsorders/completed' component={CompletedShiftsComponent} />                    
                </div>
            </Router>
        )
 }