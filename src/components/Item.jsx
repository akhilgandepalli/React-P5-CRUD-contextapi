import React, { useContext } from 'react'
import { dataContext } from '../App'

const Item = ({itemData}) => {
    const context = useContext(dataContext);
  return (
    <div className='item'>
        <span style={{width:'5%'}}>{itemData.id}</span>
        <span style={{width:'20%'}}>{itemData.name}</span>
        <span style={{width:'15%'}}>{itemData.price}</span>
        <span style={{width:'15%'}}>{itemData.category}</span>
        <button className='edit' onClick={()=>context.editProduct(itemData)}>Edit</button>
        <button 
        className='delete'
        onClick={()=>context.deleteProduct(itemData.id)}
        >Delete</button>
    </div>
  )
}

export default Item