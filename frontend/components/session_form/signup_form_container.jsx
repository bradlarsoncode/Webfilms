import { connect } from 'react-redux';
import React from 'react';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'Sign Up'
})

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SessionForm)