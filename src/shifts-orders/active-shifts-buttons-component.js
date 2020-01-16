import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import './active-shifts-buttons-component.css';
import ListItemText from '@material-ui/core/ListItemText';

import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Link from '@material-ui/core/Link';

import 'date-fns';

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
  Calendar,
} from '@material-ui/pickers';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import DateContextHOC from './../context/DateContextHOC';

const StyledNav = styled.div`
        
`;
 

class ActiveShiftsButtonsComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchVal:"",
            todayOrTomorrow: "today",
            drapDownVal: "active",
            openModel :false,
            date: new Date('2014-08-18T21:11:54')
        }
        
    }
    handleDateChange = (date,value) => {
        this.setState({date: value});
    };
    handleClickOpen = ()=> {
        this.setState({openModel: true})
    }
    handleClose = ()=> {
        this.setState({openModel: false});
    }
    handleDropdownChange = val => {
        this.setState({drapDownVal: val})
    }
    handleTodayOrTomorrow = (val) => {
        this.setState( {todayOrTomorrow: val});
    }
    hanldeSearch = ()=> {
        console.log("serach val")
    }
    handleSearchVal = (e) => {
        this.setState({searchVal: e.target.value});
    }
    render(){
        let {date, updateDate} = this.props && this.props.context;
        return( 
                <Box display="flex" className="active-shifts-buttons-container">
                    <div className="calender-controls">
                    <Box display="flex" >
                            <div className="link-container">
                            <Link href="#"  onClick={ () => this.handleTodayOrTomorrow("today")}>
                                Today
                            </Link>
                            </div>
                            <div className="link-container">
                            <Link href="#" onClick={ () => this.handleTodayOrTomorrow("tomorrow")} >
                                Tomorrow
                            </Link>
                            </div>
                            {/* <DateContext.Consumer> */}
                            {/* {({date, updateDate}) => */}
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    autoOk
                                    id="date-picker-inline"
                                    label="Date picker inline"
                                    value={date}
                                    onChange={updateDate}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                                </MuiPickersUtilsProvider>
                             {/* } */}
                            {/* </DateContext.Consumer> */}
                       </Box>
                    </div>
                    <div className="other-controls">
                        <FormControl className="select-dropdown-conatainer lg-dropdown">
                            <InputLabel id="select-label">Type</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={this.state.drapDownVal}
                            onChange={this.handleDropdownChange}
                            >
                            <MenuItem value={"active"}>Active</MenuItem>
                            <MenuItem value={"inactive"}>Inactive</MenuItem>
                            </Select>
                        </FormControl>
                        <InputBase
                            placeholder="Search"
                            className="search-field"
                            value={this.state.searchVal}
                            onChange={this.handleSearchVal}
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        <IconButton type="submit"  aria-label="search" onClick={this.hanldeSearch}>
                            <SearchIcon />
                        </IconButton>
                        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
                            + Add Shift
                        </Button>
                    </div>
                </Box>
        )
    }
    
}

export default DateContextHOC(ActiveShiftsButtonsComponent)