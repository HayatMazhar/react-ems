import React from 'react'

function TextError (props) {
  console.log(props);
  console.log(props.children);
  return <div className='error'>{props.children}</div>
}

export default TextError