import React from 'react'

const BGChange8 = () => {

    const [backgroundColor, setBackgroundColor] = React.useState('blue');

    const handleClick = () => {
        const newcolor = backgroundColor === 'blue' ? 'red' : 'blue';
        setBackgroundColor(newcolor);
    }
    
  return (
    <div  onClick={handleClick}
    style = {{
        backgroundColor,
        width: '100vw',
        height: '100vh',
        cursor: 'pointer'
    }}> 
      Click
    </div>
  )
}

export default BGChange8
