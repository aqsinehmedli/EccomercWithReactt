import Form from "../common/Form"
import { useNavigate } from "react-router"
import {useState} from "react"
const Register = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})

    try {
        const register = async () => {
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
                toast.success(data.message, {
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
            label: "Firstname",
            name: "firstname",
            type: "text",
            placeholder: "Enter your firstname"
        },
        {
            label: "Lastname",
            name: "lastname",
            type: "text",
            placeholder: "Enter your lastname"
        },
        {
            label: "Phone",
            name: "phone",
            type: "tel",
            placeholder: "Enter your phone number"
        },
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
            title: "Register",
            style: "bg-violet-700 text-white py-3 rounded-md",
            action: () => {
                register()
             }
        },
        {
            title: "Already have an account?",
            style: "text-sm",
            action: () => {
                navigate("/login")
            }
        },
    ]

    return (
        <Form formItems={formItems} formButtons={formButtons} />
    )
}

export default Register