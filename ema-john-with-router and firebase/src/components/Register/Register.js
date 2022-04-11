import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Register</h2>
                    <form>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" />

                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" name="confirm-password" />

                        </div>
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