import React, {useState, useEffect} from 'react'

const Timer7 = () => {

    const [time, setTime] = useState(60);

    useEffect(() => {
        if(time>0){
            const timer = setTimeout(() => setTime(time-1), 1000); // this will run every 1 second
            return () => clearTimeout(timer); // this will clear the timer when the component is unmounted
        }
    },[time]) // this will run the useEffect whenever time changes
  return (
    <div>
      Time Left: {time}
    </div>
  )
}

export default Timer7
