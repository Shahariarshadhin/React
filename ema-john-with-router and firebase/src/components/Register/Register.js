import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/inventory');
    }

    const handleCreateUser = event => {
        event.preventDefault();


        if (password !== confirmPassword) {
            setError('Your two passwords did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or more')
        }
        createUserWithEmailAndPassword(email, password);
        console.log('createUserWithEmailAndPassword');
    }


    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Register</h2>
                    <form onSubmit={handleCreateUser}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={handleEmailBlur} type="email" name="email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePasswordBlur} type="password" name="password" required />

                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input onBlur={handleConfirmPassword} type="password" name="confirm-password" required />

                        </div>
                        <p style={{ color: 'red' }}>{error}</p>
                        <input className='form-btn' type="submit" value="Register" />
                    </form>

                    <p>
                        Already Have and account?<Link className='form-link' to="/login">Register</Link>
                    </p>



                </div>
            </div>
        </div>
    );
};

export default Register;