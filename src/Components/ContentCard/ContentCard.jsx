import React from 'react';

const ContentCard = (props) => {
console.log(props)
  return(
    props.work.map((element, index) => 
    <div className='card'>
    <div className='card-info' key={index}>      
    {element}
    </div>
    <div className='card-image'>
    <img className='card-image' src="/placeholder-image-icon-3.jpg" alt="placeholder" />
    </div>
    </div>
  ))
}

export default ContentCard