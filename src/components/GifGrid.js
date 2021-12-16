// GrifGrid sera una colección de todos los elementos a conseguir de la categoria
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';

import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images,loading}= useFetchGifs(category);
    
    
    


    return (
        
        <>
        <h3>{ category}</h3>
        {loading&& <p className='animate__animated animate__flash'>Loading</p>}
        {/* {loading?'cargando...':'fin de carga'} */}
        <div className='card-grid'>
           
            
                {
                    images.map(img =>(
                        <GifGridItem 
                        key={img.id}
                        {...img}/>
                    ))
                }

            
        </div>
        </>
    )
}
