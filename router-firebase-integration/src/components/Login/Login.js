import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>

            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>

                <input style={{ margin: '10px' }} type="email" placeholder='Your email' />
                <br></br>
                <input style={{ margin: '10px' }} type="password" placeholder='Password' />
                <br></br>
                <input style={{ margin: '10px' }} type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;