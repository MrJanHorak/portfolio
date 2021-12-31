import React from 'react';

const ContentCard = (props) => {
console.log(props)
  return(
    props.work.map((element, index) =>
    <div className='card'>
    <div className='card-info' key={index}>      
    {element}
    <br /><br />
    <a href={props.links[index]}>Visit Site</a>
    </div>
    <div className='card-image'>
    <img className='card-image' src={props.projectPics[index]} alt="placeholder" />
    </div>
    </div>
  ))
}

export default ContentCard