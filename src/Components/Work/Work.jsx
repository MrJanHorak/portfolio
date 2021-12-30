import React from 'react';

//components
import ContentCard from '../ContentCard/ContentCard';

//assests 
import work from '../../assests/data.js'

const Work = () => {

  return (
    <div className='work-container'>
    <ContentCard className='card' work={work} />
    </div>
  )

}

export default Work