import React, { Component } from 'react';
import './AppFooter.css';

class AppFooter extends Component {
    render() {
        return (
                <footer>
                    Designed and Coded with <span className="glyphicon glyphicon-heart"></span> by Vishal Gulati 
                    (<a id="footer-link" target="_blank" rel="noopener noreferrer" href="https://www.vishalgulati.com">https://www.vishalgulati.com</a>)
                </footer>
        );
    }
}

export default AppFooter;
