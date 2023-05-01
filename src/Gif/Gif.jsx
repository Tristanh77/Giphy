import React from "react";

function Gif({currentGif}) {
  
  return (
  <div className="gif-row">
    <img src={currentGif} alt="" />
  </div>
  )
}

export default Gif;