import React from 'react';
import Paper from '@material-ui/core/Paper';
import './assign-component.css';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EachClientComponent from './each-client-component';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import {assignMembers} from './actions/shifts-orders-actions';
import DateContextHOC from './../context/DateContextHOC';


class AssignComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
            open: props.openDialogue,
			currentTab: "assigned_members"
			//selectedList : []
		}
		this.selectedMemberList = [];
		this.selectedShiftApplications = [];
	}

	handleChange = (member,type) => {
		if(type === 'inhouse_members' || type === 'previous_members'){
			this.selectedMemberList.push(member.id)
		}
		if(type === 'assigned_members' || type === 'applied_members'){
			this.selectedShiftApplications.push(member.id)
		}
	}
	assignEmployees = () => {
		let {date} = this.props && this.props.context;
		let data = { member_id:this.selectedMemberList,shift_application_id:this.selectedShiftApplications, shift_id : this.props.assignData && this.props.assignData.shift_id}
		assignMembers(data).then((response)=>{
			console.log(response)
		})
	}
	handleClose = () => {
		this.setState({ open: true });
		this.props.onClose();
    };
    setTab = (type) => {
        this.setState({ currentTab: type });
	}
	renderMembers = (member) =>{
		let members = this.props.assignData && this.props.assignData[member];
		console.log(members)
		return (		
			<Box display="flex" className="all-employee-sections-container" justifyContent="space-between">
			{ members && members.map((item,key) => { 
				return <Box display="flex" className="each-employee-section" justifyContent="space-between" key='key'>
					<FaceIcon />
					<div>{item.name}</div>
					{item.role_details.map((value,key) => {
						return <div className="roleDetails">
							<div>{value.role_name}</div>
							<div>{value.experience}</div>
							<div>{value.level}</div>
						</div>
					})}
					{/* <div>{item.role_name}</div> */}
					<Checkbox
					onChange={() => {this.handleChange(item,member)}}
					value="primary"
					inputProps={{ 'aria-label': 'primary checkbox' }}
					/>
				</Box>
			})}
			</Box>
		)
	}
	render() {
		return (
			<div>
				<Dialog className="dialogue-container" open={this.props.openDialogue}>
				<Toolbar >
					<IconButton className="dialogue-close" edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
					<CloseIcon />
					</IconButton>
				</Toolbar>
            
					<DialogContent>
						<List className="navbar-nav mr-auto">
							<Box display="flex" p={1} justifyContent="space-between" className="employee-nav-links" bgcolor="background.paper">
								{/* <ListItem onClick={()=> {this.setTab("nearByEmployees")} }>Nearby Employees</ListItem> */}
								<ListItem onClick={()=> {this.setTab("assigned_members")} }>Assigned Employees</ListItem>
								<ListItem onClick={()=> {this.setTab("applied_members")} }>Applied Employees</ListItem>
								<ListItem onClick={()=> {this.setTab("previous_members")} }>Previously Worked Employees</ListItem>
								<ListItem onClick={()=> {this.setTab("inhouse_members")} }>In-House Employees</ListItem>
								{/* <ListItem onClick={()=> {this.setTab("applied_members")} }>Applied Employees</ListItem> */}
							</Box>
						</List>
							{/* {
								this.props.assignData[this.state.currentTab].map( item => {
									return (
										<Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" >
										<div> hello</div>
			
										</Chip>
									)
								} ) 
							} */}
                           {/* <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" >
								<div> hello</div>

								</Chip><Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" >
								<div> hello</div>
							</Chip> */}
							{this.state.currentTab === 'assigned_members' && this.renderMembers('assigned_members')}
							{this.state.currentTab === 'previous_members' && this.renderMembers('previous_members')}
							{this.state.currentTab === 'inhouse_members' && this.renderMembers('inhouse_members')}
						<Button variant="contained" className="company-view-actions-save" color="primary" onClick={this.assignEmployees}> Assign </Button>
                        <Button variant="contained" className="company-view-actions-cancel" onClick={this.handleClose}>  Cancel </Button>
					</DialogContent>
				</Dialog>
			</div>
		)
	}
}
export default DateContextHOC(AssignComponent);