import React, { useEffect, useState } from 'react'

const FetchData6 = () => {

    const [data, setData] = useState(null);   

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        // .then(data => console.log(data))
        .then(jsondata => setData(jsondata))
    }, [])

  return (
    <div>
      {
        data? (
            <div>
                <h1>Title: {data.title}</h1>
                </div>
        ) : (
            <p>
                Loading...
            </p>
        )
      }
    </div>
  )
}

export default FetchData6
