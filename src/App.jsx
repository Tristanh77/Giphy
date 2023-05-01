import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Gif from './Gif/Gif';
export default function App() {

  const key = 'mkCOgT2mudMTQU8lEEdmVDH0gJdR6WVY';
  const [currentGif, setCurrentGif] = useState("fun"); 
  const [newGif, setNewGif] = useState('');
  
  useEffect(() => {
    const gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${currentGif}&limit=1`;
    async function getGif() {
      try {
        const response = await fetch(gifUrl);
        const data = await response.json();
        console.log(data);
        setNewGif(data.data[0].images.original.url)
      } catch (err) {
        console.log(err);
      }
    }

    getGif(); 
  }, [currentGif]); 

    function liftCurrentGif(gif){
      setCurrentGif(gif);
      console.log(gif)
    }
  return (
    <><div className='all'>
      <h2>Search For Your Gif(Not Jif)</h2>
      <Form  liftCurrentGif = {liftCurrentGif} />
      <Gif currentGif = {newGif} /></div>
    </>
  );
}


  