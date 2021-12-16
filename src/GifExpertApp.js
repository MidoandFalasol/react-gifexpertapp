import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // para agregar más elementos con el botón no se puede teniendo el const por eso se usara un hook
    // const categories= ['one punch', 'Samurai X', 'Naruto'];

    const [categories, setCategories]= useState(['Hospital Playlist']);

    // const handleAdd=()=>{
    //     // esta funcion tiene que agregar un nuevo elemento en el arreglo al dar click en "agregar"
    //     // se utilizara el setCategories para establecerlo y así cambiarlo
    //     // react va a renderizar el componente y así realizara los cambios
        
    //     // una manera es usando el spread-----
    //     // setCategories([...categories, 'Boruto']);

    //     // otra manera es regresando un callback-------
    //     // setCategories(cats=>[...cats, 'boruto']);
    //     // el primer valor es el estado anterior y luego el nuevo estado, no sera un nuevo arreglo con valores anteriores
    // }



    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategories={ setCategories}/> 
            <hr></hr>
            
           {/* como mostrarlo dentro de una lista  los categories*/}
           <ol>
                {
                    categories.map( category  => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    )
}
