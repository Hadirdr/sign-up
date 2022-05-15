import React,{useEffect, useState} from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./toast"
import Styles from "./SignUp.module.css"
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [data,setData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        isAccepted:false
});

const [errors,setErrors] =useState({});
const [touched,setTouched] = useState({});

useEffect(() => {
    setErrors(validate(data))
},[data,touched])

const focusHandler = event =>{
    setTouched({...touched,[event.target.name]:true})
}

    const changeHandler = event =>{
        if( event.target.name === "isAccepted"){
            setData({...data, [event.target.name]: event.target.checked})
        }else {
            setData({...data, [event.target.name]: event.target.value})
        }
    }
    const submitHandler = event => {
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("You signed in successfuly","success")

            }else {
                notify("invalid data!","error")
             setTouched({
            name: true,
            email: true,
            password: true,
            confirmPassword: true,
            isAccepted: true,
        })
    }
}


    return (
        <div className={Styles.container}>
            <form onSubmit={submitHandler} className={Styles.formContainer}>
                <h2 className={Styles.header}>SignUp</h2>
                <div className={Styles.formField}>
                    <form>Name</form>
                    <input className={(errors.name && touched.name)? Styles.uncompleted:Styles.formInput} 
                    type="text"
                     name="name"
                      value={data.name}
                       onChange={changeHandler}
                        onFocus={focusHandler} />
                    {errors.name && touched.name && <span>{errors.name}</span>}
                 </div>
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
                < div className={Styles.formField}>
                    <form>Confirm Password</form>
                    <input className={(errors.confirmPassword && touched.confirmPassword)? Styles.uncompleted:Styles.formInput}
                    type="password"
                     name="confirmPassword"
                      value={data.confirmPassword}
                       onChange={changeHandler}
                        onFocus={focusHandler}  />
                    {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>    
                <div className={Styles.formField}>
                    <div className={Styles.checkBoxContainer}>
                    <label>I accept terms of privacy police</label>
                    <input 
                    type="checkbox"
                     name="isAccepted"
                      value={data.isAccepted}
                       onChange={changeHandler}
                        onFocus={focusHandler} />
                    </div>
                    {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div className={Styles.formButtons} >
                 <Link to= "/login">Login</Link>
                    <button type="submit" >SignUp</button>
                </div>
            </form>
            <ToastContainer/>
        </div>
    );
};

export default SignUp;