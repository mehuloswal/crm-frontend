import React,{useState} from 'react'
import "./style.css";
import "../../components/login/Login.comp"
import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/password-reset.comp';



export const Entry = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [formLoad, setformLoad] = useState('login');

    const handleOnChange = (e) =>{
        
        const{name,value}=e.target
        switch(name){
            case 'email':
                setemail(value)
                break
            case 'password':
                setpassword(value)
                break

                default:
                    break
        }
    }
    const handleOnSubmit = (e)=>{
        e.preventDefault()
        if(!email || !password){
           return alert("Fill all the Credentials")
        }
        
        //TODO call api to submit the form
    }
    const handleOnResetSubmit = (e)=>{
        e.preventDefault()
        if(!email ){
           return alert("Please enter the email")
        }
    }
    const formSwitcher=(formType)=>{
        setformLoad(formType)
    }

    return (
        <div className="entry-page bg-info">
            <div className="bg-light jumbotron m-3 form-box">
                {formLoad ==='login'&&<LoginForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} formSwitcher={formSwitcher} email={email} pass={password} /> }
            
                {formLoad ==='reset'&&<ResetPassword handleOnChange={handleOnChange} handleOnResetSubmit={handleOnResetSubmit} formSwitcher={formSwitcher} email={email}/>}
            </div>
        </div>
    )
}
