import React from 'react';

const ContentCard = (props) => {
console.log(props)
  return(
    props.work.map((element, index) => 
    <div className='card' key={index}>
      <img className='card' src="https://github.com/MrJanHorak/portfolio/blob/main/src/assests/placeholder-image-icon-3.jpg" alt="placeholder" />
    {element}
    </div>
  ))
}

export default ContentCard