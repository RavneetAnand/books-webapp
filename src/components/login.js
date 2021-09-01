import React, {useState} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';

import { login } from '../redux/actions';

const mapStateToProps = (state) => {
    return {
        isLoggedIn : state.userReducer.isLoggedIn
    }
};

const mapDispatchToProps = { login };

/**
 * Component to manage the user login.
 */
const Login = ({isLoggedIn, login}) => {
    const [state , setState] = useState({username : "", password : ""})

    /**
     * Manage the change in the form fields.
     * @param {*} e Event value change.
     */
    const handleChange = (e) => {
        const {name , value} = e.target;
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    /**
     * Manage the form submit.
     * @param {*} e Event value change.
     */
    const handleLogin = (e) => {
        e.preventDefault();
        login(state.username, state.password);
    }

    // If a user is login already; go directly to the grid.
    if (isLoggedIn) {
        return <Redirect to='/books' />;
    }
    return (
    <div className='col-md-12'>
        <div className='card card-container'>
        <img
            src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
            alt='profile-img'
            className='profile-img-card'
        />
        <Form onSubmit={handleLogin}>
            <div className='form-group'>
            <label htmlFor='username'>Username</label>
            <Input type='text' className='form-control' name='username' onChange={handleChange}/>
            </div>
            <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <Input type='password' className='form-control' name='password' onChange={handleChange}/>
            </div>
            <div className='form-group'>
            <button className='btn btn-primary btn-block'>Login</button>
            </div>
        </Form>
        </div>
    </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);