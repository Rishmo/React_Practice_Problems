import React from 'react'

const UploadImage11 = () => {

    const [file, setFile] = React.useState(null);   // Initialize file state with null

    const handleFileChange = (e) => {
        const file = e.target.files[0]; // Get the first file selected by user
        setFile(file); // Set the file in state
    }
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {file && <img src={URL.createObjectURL(file)} alt="preview" />} 
      
    </div>
  )
}

export default UploadImage11
