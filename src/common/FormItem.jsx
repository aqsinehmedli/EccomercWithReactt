const FormInput = ({label, name, type, placeholder, handleInputChange}) => {
    return (
     <div className="flex flex-col">
         <label htmlFor={name}>{label}</label>
         <input onChange={(e)=> {
            handleInputChange(e.target.name, e.target.value)
         }} placeholder={placeholder}
         className="border p-2"
         name={name} type={type} />
     </div>
    )
    }
    
    export default FormInput