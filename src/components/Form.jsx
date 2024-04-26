import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../App';

const Form = () => {
  const context = useContext(dataContext);
  
  const [product, setProduct]=useState(context.initialState);

  const inputHandler = (e)=>{
    const {name,value}=e.target;
    setProduct({...product,[name]:value});
  }
  const submitHandler = (e)=>{
    e.preventDefault();
    context.setOpenForm(false);
    context.postProducts(product);
  }

  return (
    <div className='form-container'>
      <form action="" onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            placeholder='Enter product name'
            onChange={inputHandler}
            value={product.name}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input 
          type="number" 
          name="price" 
          id="price" 
          placeholder='Enter price' 
          onChange={inputHandler}
          value={product.price}
          />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
        <select name="category" id="category" onChange={inputHandler} value={product.category}>
          <option value="-1">select catagory</option>
          <option value="mobile">Mobile</option>
          <option value="tv">Tv</option>
          <option value="laptop">Laptop</option>
        </select>
        </div>
        <div>
          <button className='cancel-btn' onClick={()=>context.setOpenForm(false)}>Cancel</button>
          <button type='submit' className='submit-btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Form