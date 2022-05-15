import React,{useEffect, useState} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./toast"
import Styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';
const Login = () =>{
    const [data,setData] = useState({
        email:"",
        password:"",
});

const [errors,setErrors] =useState({});
const [touched,setTouched] = useState({});

useEffect(() => {
    setErrors(validate(data,"login"))
},[data, touched])

const focusHandler = event =>{
    setTouched({...touched,[event.target.name]:true})
}

    const changeHandler = event =>{
        
            setData({...data, [event.target.name]: event.target.value})
    }

    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("You Loged in successfuly","success")

            }else {
                notify("invalid data!","error")
             setTouched({
            email: true,
            password: true
        })
    }
}

    return (
        <div className={Styles.container}>
            <form onSubmit={submitHandler} className={Styles.formContainer}>
                <h2 className={Styles.header}>Loge in</h2>
                <div className={Styles.formField}>
                    <form>Email</form>
                    <input className={(errors.email && touched.email)? Styles.uncompleted:Styles.formInput}
                    type="text"
                     name="email"
                      value={data.email}
                       onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.email && touched.email && <span>{errors.email}</span>}
                </div>
                <div className={Styles.formField}>
                    <form>Password</form>
                    <input className={(errors.password && touched.password)? Styles.uncompleted:Styles.formInput}
                    type="password"
                     name="password"
                      value={data.password}
                       onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.password && touched.password && <span>{errors.password}</span>}
                </div>
                <div className={Styles.formButtons} >
                 <Link to="/signup">SignUp</Link>
                    <button type="submit" >Login</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default Login;