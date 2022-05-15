 export const validate = (data,type) =>{
    const errors ={};
    
    if (!data.email){
        errors.email = "Eamil wrong"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "Email Address is invalid"
    } else {
        delete errors.email
    }

    if (!data.password){
        errors.password = "password is required"
    }else if (data.password.lenght<6){
        errors.password = "password need to be 6 character or more"
    }else 
    {delete errors.password}
    
    if (type === "SignUp"){

        if (!data.name.trim()){
            errors.name = "Username wrong"
        }else {
            delete errors.name
        }
        if (!data.confirmPassword){
            errors.confirmPassword = "confirm the password"
        } else if (data.confirmPassword !== data.password){
            errors.confirmPassword = "password do not match"
        }else {
            delete errors.confirmPassword
        }
    
        if (data.isAccepted){
            delete errors.isAccepted
        }else{
            errors.isAccepted = "Accepte our regulations"
        }

    }
    return errors;
}

