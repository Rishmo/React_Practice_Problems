import React, { useState } from 'react'

const UserInput3 = () => {
    const [userInput, setUserInput] = useState('');

  return (
    <div>
      <input type = "text" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
      <p>User Input: {userInput} </p>
    </div>
  )
}

export default UserInput3
