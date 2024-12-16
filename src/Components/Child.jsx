import React from 'react'

function Child({MessageToChild}) {

    const handleChange = (e) => {
        MessageToChild(e.target.value);
      };
  return (
    <div>
        <h1 style={{color:'green',marginTop:'50px'}}>Child Component</h1>

        <input type="text" placeholder='Update Parent Message!' onChange={handleChange} style={{borderRadius:'5px' ,padding:'6px'}} />
      
    </div>
  )
}

export default Child
