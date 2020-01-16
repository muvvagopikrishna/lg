import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import './shift-view-buttons-component.css';
import ClientListComponent from './client-list-component';
import Button from '@material-ui/core/Button';
import RecordPaymentComponent from './record-payment-component';
import GenerateInvoiceComponent from './generate-invoice-component';
import { postShift } from './actions/shifts-orders-actions';

export default class ShiftViewButtonsComponent extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
            openDialogue: false,
            openGenerateInvoiceDialogue: false
		}
		// this.assignHeader = this.assignHeader.bind(this);
	}

    postShift = () => {
        //console.log(this.props.shift_date,this.props.id)
        let {date} = this.props && this.props.context;
        postShift(this.props.date,this.props.id,date).then((response)=>{
            console.log(response)
        })
    }   
    recordPayment = () => {
        this.setState({openDialogue: true})
    }
    generateInvoice = () => {
        this.setState({openGenerateInvoiceDialogue: true})
    }
    onClose = () => {
        this.setState({ openDialogue: false })
    }
    onCloseOfGenerateInvoice = ()=> {
        this.setState({ openGenerateInvoiceDialogue: false })
    }
    render(){
    
        return( 
                
                    <Box display="flex"  className="active-shifts-buttons-container">
                        <div className="shifts-view-buttons-sec-1">
                            <Button className="shift-edit" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                                Edit
                            </Button>
                            <Button className="shift-post-a-job-button" variant="contained" color="primary"  onClick={this.postShift}>
                                Post A Job
                            </Button>
                            <Button className="shift-assign-button" variant="contained" color="primary"  onClick={this.handleClickOpen}>
                                Assign
                            </Button>
                        </div>
                        <div className="shifts-view-buttons-sec-2">
                            <Button className="shift-generate-invoice-button" variant="contained" color="primary" onClick={this.generateInvoice}>
                                Generate Invoice
                            </Button>
                            <Button className="shift-record-payment-button" variant="contained" color="primary" id="record-payment"  onClick={this.recordPayment}>
                                Record Payment
                            </Button>
                        </div>
                        <RecordPaymentComponent onClose={this.onClose}  openDialogue={this.state.openDialogue}/>
                        <GenerateInvoiceComponent onClose={this.onCloseOfGenerateInvoice}  openDialogue={this.state.openGenerateInvoiceDialogue}/>
                    </Box>
                   
                
            )
    }
}