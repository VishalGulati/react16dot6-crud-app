import React, { Component } from 'react';
import './AppBody.css';
import TableBody from '../TableBody/TableBody';

class AppBody extends Component {
    render() {
        return (
            <div className="app-body-container">
                <div className="row bg-row">
                </div>
                <TableBody />
            </div>
        );
    }
}

export default AppBody;
