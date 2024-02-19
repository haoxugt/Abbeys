import { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

import './LoginForm.css';


function LoginFormModal() {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const { closeModal } = useModal();
    // const navigate = useNavigate();


    const formType = "Log In";

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors({});
        return dispatch(sessionActions.login({ credential, password }))
            .then(closeModal)
            .catch(
                async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                }
            );
            // return (<Navigate to='/' />);
    };

    const DemoUserLogin = () => {
        setCredential("MatthewCrawley");
        setPassword("MatthewCrawley");

    }

    return (
        <div className='login-form-container'>
            <h1>{formType}</h1>
            <form onSubmit={handleSubmit}>
                <div className='label-container'>
                <label>
                    {/* Username or Email */}
                    <input
                        id="login-credential-input"
                        type="text"
                        // value={credential}
                        onChange={(e) => setCredential(e.target.value)}
                        placeholder='Username or Email'
                        required
                    />
                </label>
                {/* <div className="errors">{errors.improvement}</div> */}
                <label>
                    {/* Password */}
                    <input
                        id="login-password-input"
                        type="password"
                        // value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        required
                    />
                </label>
                </div>
                {errors.credential && <p>{errors.credential}</p>}
                <button type="submit" className="startButton">{formType}</button>
                <button className='Demouser-login' onClick={DemoUserLogin}>Demo user</button>
            </form>
        </div>
    );
}

export default LoginFormModal;
