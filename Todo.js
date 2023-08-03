import React, { useState } from 'react'
import './App.css'
export default function Todo() {
    const [add,setAdd] = useState('');
    const [items,setItems]=useState([])
    const addItem=()=>{
        const item={
            id:Math.floor(Math.random()*1000),
            text:add
        }
        if(!add){
            alert("Enter a todo")
            return
        }
        setItems(oldItemlist=>[...oldItemlist,item])
        setAdd("")
    }
    const deleteItem=(id)=>{
       const afterDelete= items.filter((item)=>item.id!==id)
       setItems(afterDelete);
    console.log(id)
    }
  return (
    <div className='body'>
    <div className='main'>
        <h1>Todo List</h1>
        <input type="text" placeholder='Add a todo' value={add} onChange={e=>setAdd(e.target.value)}/>
        <button onClick={addItem}>Add</button>
        <ul style={{listStyle:'none'}}>
            {items.map((item)=>{
                return <li key={item.id}>{item.text} <button className='dlt' onClick={()=>deleteItem(item.id)}>Delete</button> </li>
            })}
            
        </ul>
    </div>
    </div>
  )
}
