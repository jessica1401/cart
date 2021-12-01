import React, { Component } from 'react';
import RoughCounters from './components/roughCounters';
import RoughNavbar from './components/roughNavbar';

class RoughApp extends React.Component {
    render() { 
        return <React.Fragment>
            <RoughNavbar></RoughNavbar>
            <RoughCounters></RoughCounters>
        </React.Fragment>
    }
}
 
export default RoughApp;