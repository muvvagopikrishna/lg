import React from 'react';
import './shifts-orders-component.css'
import ShiftsOrdersNavComponent from './shifts-orders-nav-component'


export default function ShiftsOrdersComponent(){
    return( 
            <div className="shifts-orders-container">
                <div className="title"> 
                    <span> Employees </span> 
                    <span> Dashboard > Employees</span>
                </div>
                
                <ShiftsOrdersNavComponent />


            </div>)
 }