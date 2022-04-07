import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doLoginSuccess } from '../../hooks/context/appAction/AppAction';
import useValueContext from '../../hooks/useValueContextCer';
import { loginAccount } from '../../services/Auth';

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [state, dispatch] = useValueContext()
    
    const navigate = useNavigate()

    const handleSubmitForm = async (e) => {
        e.preventDefault()

        const data = {
            email, password
        }

        try {
            const res = await loginAccount(data)
            if(res.status===200){
                localStorage.setItem('token', JSON.stringify(res?.data?.token))
                dispatch(doLoginSuccess(res?.data?.data))
                navigate('/message')
            }
        } catch (error) {
            console.log(error)
        }
        

    }



    return (
        <div className='login h-screen bg-gray-100 flex justify-center items-center'>
            <div className='w-3/4 h-3/4 rounded-xl p-4 bg-white flex'>
                <div className='w-2/5 bg-red-100 rounded-xl'>

                </div>
                <div className='w-3/5 flex justify-center items-center'>
                    <div >
                        <form className='form'>
                            <h1 className='title'>Login</h1>
                            <div className='form-group'>
                                <label className='label block'>Email</label>
                                <input
                                    type='email'
                                    className='input'
                                    placeholder='Enter your email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className='form-group'>
                                <label className='label block'>Password</label>
                                <input
                                    type='password'
                                    className='input'
                                    placeholder='Enter your password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                <button className='button w-full' onClick={handleSubmitForm}>Login</button>
                            </div>
                            <div className='text-center mt-3'>You don't have account <Link to='/register' className='underline text-blue-600'>Register</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;