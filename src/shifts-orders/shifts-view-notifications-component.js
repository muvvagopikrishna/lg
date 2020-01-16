import React from 'react';
import './shifts-view-notifications-component.css'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';


export default class ShiftsViewNotificationsComponent extends React.Component{
    handleClickOpen = ()=>{

    }
     handleDelete = () => {
        console.info('You clicked the delete icon.');
      };

    renderNotifications(){

    }
    render(){
    return( 
            <Paper className="shifts-view-notifications-container">
               
                <Box display="flex" className="notifications-container">
                    {this.renderNotifications}
                    <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" />
                    {/* <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" />
                    <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" />
                    <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" />
                    <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" />
                    <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" />
                    <Chip className="each-notification" icon={<FaceIcon />} label="Deletable primary notification. for more details please contact in person" onDelete={this.handleDelete} color="" /> */}

                </Box>
            </Paper>)
    }
 }