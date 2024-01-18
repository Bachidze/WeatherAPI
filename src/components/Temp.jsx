import React from 'react'

const Temp = ({
    weather ='0',
    title ,
    imgUrl
    }) => {
  return (
    <div className='flex'>
        <h1 className='wind'>{title}</h1>
        <div className='line line4'>
            <div className='paragraphimg'>
        <p>{weather}</p>
        <img className='gio' src={imgUrl} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Temp