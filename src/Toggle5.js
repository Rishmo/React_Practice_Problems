import React, { useState } from 'react'

const Toggle5 = () => {

    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    }
    
  return (
    <div>
      <label>
        <input type="checkbox" onChange= {handleToggle} />
        <span>Toggle me</span>
      </label>
    </div>
  )
}

export default Toggle5
