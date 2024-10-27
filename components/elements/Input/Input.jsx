/**
 * Input default element
 * 
 * @prop "text"|"number"|"search"|"email"|"password" 'type' Input type
 * @prop callback 'OnChange' On-change event handler
 * @prop string 'placeholder' Input placeholder
 * @prop string 'id' Input unique identifier
 */
const Input = ({type, OnChange, placeholder, id, className}) => {
    return(
        <input 
            type={type} 
            onChange={OnChange} 
            name={id} 
            id={id} 
            placeholder={placeholder}
            className={className}
        />
    )
}

export default Input;