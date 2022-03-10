import * as React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

class PolicyDoc extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <Sidebar />
            </React.Fragment>
            
            );
    }
};
export default connect()(PolicyDoc);
