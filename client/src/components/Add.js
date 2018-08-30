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
        console.log('values', values);
        let submission = {
            // journal: values.journal,
            // mood: values.mood,
            // activity: values.activity,
            // time: values.time,
            history: {
                startInput: values.startInput,
                // startInput: 'test startInput',
                numberCycles: values.numberCycles,
                endPage: values.endPage
            }
        };
        console.log('submission.history', submission.history.startInput);
        return this.props.dispatch(sendEntry(submission));
    }

    render() {
        let error;
        // console.log('soda', this);
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
            <div>
                <form
                    className="login-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>
                    {error}
                    <br />
                    
                    <p>Welcome back, {this.props.email}</p>

                    <p>Enter Topic</p>

                    <label htmlFor="startInput">Topic</label>
                      <br />
                        <Field name="startInput" component="input" placeholder="E.g. Bézier Curve" type="input" />
                        <br />
                    <button 
                        disabled={this.props.pristine || this.props.submitting}
                        className='submit'
                    >
                        Submit
                    </button>
                </form>

                {/*(<h1>${submission.history.startInput}</h1>*/}

{/*                <Field
                    name="startTopic"
                    component="input"
                    type="text"
                    placeholder="E.g. Test Val"
                    id="startTopic"
                  />*/}

            </div>
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






