import React from 'react';
import DateContext from './DateContext';
export default function DateContextHOC(Component) {
    return function WrapperComponent(props) {
        return (
            <DateContext.Consumer>
                {state => <Component {...props} context={state} />}
            </DateContext.Consumer>
        );
    };
}