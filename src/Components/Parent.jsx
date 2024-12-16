import React,{useState} from 'react'
import Child from './Child'

function Parent() {

    const [data,setData]=useState('Heyy Child')

    const updateData=(newData)=>{
        setData(newData)
    }
  return (
    <div>
      
      <h1 sty>Parent Components</h1>
      <h3 style={{color:'red'}}>Message From Parent : {data}</h3>
      <Child MessageToChild={updateData}/>


    </div>
  )
}

export default Parent
