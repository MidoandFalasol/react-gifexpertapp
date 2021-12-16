import React,  { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory=({setCategories})=>{

    const [ inputValue, setInputValue]=useState(' ');
    // se crea una constante nueva para poder mostrar el nuevo valor agregado al escribir 
    // en el input 

    const handleInputChange=(e)=>{
        setInputValue(e.target.value);

    }

    const handleSubmit=(e)=>{
        // preever el refresh por defecto del formulario
        e.preventDefault();

        // validación en el submit
        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue, ...cats ]);
            setInputValue('');
        }
        // console.log('Submit Hecho')

        
    }
    return(
       
        <form onSubmit={handleSubmit}>
            {/* el formulario es el acomulador */}
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        </form>
        
    )
}

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}