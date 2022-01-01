import React from 'react';

const ContentCard = (props) => {
  return(
    props.work.map((element, index) =>
    <div key={1+index} className='card'>
    <div className='card-info' key={index}>      
    {element}
    <br /><br />
    <a key={20+index} href={props.links[index]}>Visit Site</a>
    </div>
    <div  key={30+index} className='card-image'>
    <a href={props.links[index]}>
    <img className='card-image' src={props.projectPics[index]} alt="placeholder" />
    </a>
    </div>
    </div>
  ))
}

export default ContentCard