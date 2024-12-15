import Form from "../common/Form"
import { useNavigate } from "react-router";
import { useStore } from "zustand";
import { themeStore } from "../common/Store";
import { useState } from "react";
const Login = () => {
    const navigate = useNavigate()
    const { theme, addAccessToken,addRefreshToken } = useStore(themeStore)
    const [formData, setFormData] = useState({})
    
    try {
        const login = async () => {
            const response = await fetch("http://localhost:3000/api/auth/login",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    "Accept":"application/json"
                },
                body:JSON.stringify(formData)
            })
            const data = await response.json()
            if(response.ok){
                addAccessToken(data.accessToken)
                addRefreshToken(data.refreshToken)
                navigate("/")
            }
            else{
                toast.error(data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Bounce,
                    });
            }
        }
    } catch (error) {
        console.error(error)
    }
    finally{
        
    }
    const formItems = [
        {
            label: "Email",
            name: "email",
            type: "email",
            placeholder: "Enter your email"
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            placeholder: "Enter a password"
        },
    ]

    const formButtons = [
        {
            title: "Login",
            style: "bg-green-700 text-white py-3",
            action: () => {
                login()
            }
        },
        {
            title: "Don't have an account?",
            style: "",
            action: () => {
                navigate("/register");
            }
        },
        {
            title: "Forgot password?",
            style: "text-red-600",
            action: () => {}
        },
    ]

    return (
        <Form setFormData={setFormData} formItems={formItems} formButtons={formButtons}/>
    )
}

export default Login