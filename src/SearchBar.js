import React, {useState} from 'react'

export default function SearchBar({items}) { // Destructure items from props
    const [searchItem,setSearchItem] = useState(''); // Declare searchItem and setSearchItem using useState

    const filteredItems = items.filter((item) =>  // Filter items based on searchItem
    item.toLowerCase().includes(searchItem.toLowerCase()) 
    // Convert both item and searchItem to lowercase and check if item includes searchItem
    )

  return (
    <div>
      <input type='text' placeholder='Search...' onChange={(e)=> setSearchItem(e.target.value)}/> 
      {/* Input field to search items */}
      <ul>
        {filteredItems.map((item,index) => ( // Map through filteredItems
            <li key={index}>{/*  Add key to each list item */}
                {item}  {/* Display item */}
            </li>
        ))}
      </ul>
    </div>
  )
}

