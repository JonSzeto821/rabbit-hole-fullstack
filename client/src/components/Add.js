import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { add } from '../actions/auth';
import { testFetch } from '../actions/protected-data';
import { sendEntry } from '../actions/addNew';
// import {required, nonEmpty} from '../validators';

export class Add extends React.Component {

    componentDidMount() {
       // this.props.dispatch(testFetch());
    }


    onSubmit(values) {
        let submission = {
            // journal: values.journal,
            // mood: values.mood,
            // activity: values.activity,
            // time: values.time,
            history: {
                startPage: values.startPage,
                numberCycles: values.numberCycles,
                endPage: values.endPage
            }
        };
        console.log(submission);
        return this.props.dispatch(sendEntry(submission));
    }

    render() {
        let error;
        console.log('soda', this);
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }

        // if (!this.props.loggedIn) {
        //     return <Redirect to="/" />;
        // }

        return ( //modify form to input wikipedia info
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <br />
                
                <p>Welcome back, {this.props.email}</p>

                <p>Mood</p>
                {/*<label>
                                    <Field name="mood" component="input" type="radio" value="happy" />
                                    {' '}
                                    happy
                        </label>
                          <label>
                            <Field name="mood" component="input" type="radio" value="nervous" />
                            {' '}
                            nervous
                          </label>
        
                          <p>Activity</p>
                        <label>
                            <Field name="activity" component="input" type="radio" value="work" />
                            {' '}
                            work
                        </label>
                          <label>
                            <Field name="activity" component="input" type="radio" value="video games" />
                            {' '}
                            video games
                          </label>
                          <br />
                          <br />
                          <label htmlFor="journal">Journal</label>
                          <br />
                            <Field name="journal" component="textarea" type="textarea" />
                        <br />*/}
                <label htmlFor="startPage">StartPage</label>
                  <br />
                    <Field name="startPage" component="input" type="input" />
                    <br />
                {/*<div>
                    <Field
                        name="numberCycles"
                        component="input"
                        type="String"
                    />
                </div>
                <label htmlFor="endPage">endPage</label>
                  <br />
                    <Field name="endPage" component="textarea" type="textarea" />
                    <br />*/}
                <button disabled={this.props.pristine || this.props.submitting}>
                    Submit
                </button>
            </form>
        );
    }
}

const mapStateToProps = state => {
    const {currentUser} = state.auth;
    return {
        loggedIn: currentUser !== null,
        email: currentUser ? state.auth.currentUser.email : ''
    };
};

Add = connect(
    mapStateToProps
    )(Add);

export default reduxForm({
    form: 'add',
    onSubmitFail: (errors, dispatch) => dispatch(focus('add', 'email'))
})(Add);






