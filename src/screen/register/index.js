import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return(
        <div className='login h-screen bg-gray-100 flex justify-center items-center'>
            <div className='w-3/4 h-3/4 rounded-xl p-4 bg-white flex'>
                <div className='w-2/5 bg-red-100 rounded-xl'>
                    
                </div>
                <div className='w-3/5 flex justify-center items-center'>
                    <div >
                        <form className='form'>
                            <h1 className='title'>Create an account</h1>
                            <div className='form-group'>
                                <label className='label block'>User Name</label>
                                <input type='name' className='input' placeholder='Enter your username'/>
                            </div>
                            <div className='form-group'>
                                <label className='label block'>Email</label>
                                <input type='email' className='input' placeholder='Enter your email'/>
                            </div>
                            <div className='form-group'>
                                <label className='label block'>Password</label>
                                <input type='password' className='input' placeholder='Enter your password'/>
                            </div>
                            <div className='form-group'>
                                <label className='label block'>Confirm Password</label>
                                <input type='password' className='input' placeholder='Enter your confirm password'/>
                            </div>
                            <div>
                                <button className='button w-full'>Register</button>
                            </div>
                            <div className='text-center mt-3'>You have account <Link to='/login' className='underline text-blue-600'>Login</Link></div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;