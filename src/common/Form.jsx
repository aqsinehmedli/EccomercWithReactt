import { useEffect, useState, useContext } from "react"
import FormInput from "./FormInput"

const Form = ({ setFormData,formItems, formButtons }) => {

    const handleInputChange = (name, value) => {
        setFormData(prevState => ({ ...prevState, [name]: value }))
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault()
        }} className={`flex flex-col gap-5 max-w-[400px] mx-auto pt-12`}>
            {
                formItems.map(item => <FormInput label={item.label} name={item.name} type={item.type} placeholder={item.placeholder} handleInputChange={handleInputChange} />)
            }

            {
                formButtons.map(button => <button onClick={button.action} className={button.style}>{button.title}</button>)
            }
        </form>
    )
}

export default Form