import React, { useState } from 'react';

export default function Form({liftCurrentGif}){
    const [currentGif, setCurrentGif] = useState('')
    
    function handleChange(e){
        setCurrentGif(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        liftCurrentGif(currentGif);
        console.log(currentGif)
    }
    return (
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder="Search Gif" name='currentGif' value={currentGif} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    )
}