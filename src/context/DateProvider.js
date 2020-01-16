import DateContext from './DateContext';
import React,{Component} from 'react';

const formatDate = function(date){
    return `${date.getFullYear()}-${("0"+(date.getMonth()+1)).slice(-2)}-${("0"+date.getDate()).slice(-2)}`;
}
export default class DateProvider extends Component {
    state = {
        date: formatDate(new Date())
    };
    
       
    render() {
        return (
            <DateContext.Provider
                value={{
                    date: this.state.date,
                    updateDate: (date) => {
                        this.setState({
                            date:formatDate(date)
                        });
                    }
                }}
            >
                {this.props.children}
            </DateContext.Provider>
        );
    }
}