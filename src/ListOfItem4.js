import React from 'react'

const ListOfItem4 = () => {

    const items = ['item1', 'item2', 'item3', 'item4', 'item5'];

  return (
    <ul>
        {items.map((item, index) => {
            return <li key = {index}> {item} </li>
        })}
    </ul>
  )
}

export default ListOfItem4
