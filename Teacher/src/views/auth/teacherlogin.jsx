import logo from '../../assets/Teacher/logo1.png';
import teacherImage from '../../assets/Teacher/Teacherlogin.svg';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { teacherLogin, clearMessages } from '../../store/Reducers/authReducer';
import { CiUser, CiLock } from 'react-icons/ci'; // Ensure you import necessary icons

function Teacherlogin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loader, errorMessage, successMessage } = useSelector(state => state.auth);
    const [state, setState] = useState({
        username: '',
        password: ''
    });

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const submit = (e) => {
        e.preventDefault();
        dispatch(teacherLogin(state));
    };

    useEffect(() => {
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(clearMessages());
        }
        if (successMessage) {
            toast.success(successMessage);
            dispatch(clearMessages());
            navigate('teacher/dashboard');
        }
    }, [errorMessage, successMessage, dispatch, navigate]);

    return (
        <div className="min-h-screen inset-0 bg-cover bg-[#A7BEAE]">
            <div className="absolute top-2 left-4 md:left-10 mt-3 lg:left-14 pt-7">
                <img src={logo} alt="Logo" className="h-16 w-full" />
            </div>
            <div className="justify-center mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] lg:gap-[50px] items-center">
                    <div className="text-center flex flex-col justify-center items-center">
                        <div className="mb-8">
                            <h1 className="text-[40px] lg:text-[55px] font-bold text-white mt-[120px]">
                                Hello, Teacher!
                            </h1>
                            <h2 className="text-[30px] lg:text-[40px] font-extralight text-slate-200 mt-4">
                                Welcome to your <br /> Online Teacher’s Portal
                            </h2>
                        </div>
                        <img src={teacherImage} alt="Teacher Illustration" className="w-full max-w-lg h-auto mt-2" />
                    </div>
<div className="ml-[200px]">

<div className=' h-[746px] max-w-full bg-white rounded-l-[56px] mt-[100px] p-20 flex flex-col items-center justify-center '>
                    <div>
                        <h2 className="text-[30px] lg:text-[39px] text-gray-700 mb-6 font-bold text-center">Login</h2>
                        <form onSubmit={submit}>
                            <div className=" mb-6">
                                <label className="text-gray-700 w-[430px] font-medium text-[18px] flex items-center">
                                    <CiUser className="text-[#BB5042] mb-2 w-6 h-6 mr-2" />
                                    Username
                                </label>
                                <input
                                    onChange={inputHandle}
                                    value={state.username}
                                    name="username"
                                    type="text"
                                    placeholder="Enter Username"
                                    className="w-[480px] placeholder:text-sm max-w-lg mt-1 p-3 focus:border-[#BB5042] focus:outline-none border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="text-gray-700 text-[18px] w-[430px] font-medium flex items-center">
                                    <CiLock className="text-[#BB5042] mb-2 w-6 h-6 mr-2" />
                                    Password
                                </label>
                                <input
                                    onChange={inputHandle}
                                    value={state.password}
                                    name="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    className="w-full placeholder:text-sm max-w-lg mt-1 p-3 focus:border-[#BB5042] focus:outline-none border border-gray-300 rounded-lg"
                                    required
                                />
                            </div>
                            <div className="text-right">
                                <Link to="/forget-password" className="text-[#0866FF]">
                                    Forgot Password?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full max-w-lg mt-10 h-[60px] p-3 bg-[#BB5042] text-[20px] text-white rounded-lg flex justify-center items-center"
                            >
                                {loader ? <PropagateLoader color="#fff" cssOverride={{ display: 'flex', justifyContent: 'center' }} /> : 'Login'}
                            </button>
                        </form>
                    </div>
                    </div>   
</div>
                

                </div>
            </div>
        </div>
    );
}

export default Teacherlogin;
