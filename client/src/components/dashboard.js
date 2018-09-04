import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {fetchProtectedData} from '../actions/protected-data';
import InputContainer from './input-container/input-container';
import OptionContainer from './options-container/options-container';

export class Dashboard extends React.Component {
    componentDidMount() {
        if (!this.props.loggedIn) {
            return;
        }

        this.props.dispatch(fetchProtectedData());
        // console.log('DASHBOARD', this.props.protectedData);
    }

    render() {
        // Only visible to logged in users
        if (!this.props.loggedIn) {
            return <Redirect to="/" />;
        }

        let topicProps = this.props.protectedData;

        return (
            <div className="dashboard">
                <br />
                <div className="dashboard-username">
                    Email: {this.props.email}
                </div>
{/*                <div className="dashboard-protected-data">
                    Protected data: {this.props.protectedData}
                </div>*/}
                <br />
                <Link to="/add">Add Entry</Link>
                <h3>Start of Components</h3>
                <InputContainer 
                    props={this.props}
                 />
                <OptionContainer 
                    props={this.props}
                    topicProps={topicProps}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    console.log(currentUser);
    return {
        loggedIn: currentUser !== null,
        email: currentUser ? state.auth.currentUser.email : '',
        protectedData: state.protectedData.data
    };
};

export default connect(mapStateToProps)(Dashboard);
