import React,{useContext} from 'react'
import { dataContext } from '../App'
import Item from './Item';

const Container = () => {
    const context = useContext(dataContext);
  return (
    <div className='container'>
        <div className='container-head'>
            <h4>ID</h4>
            <h4 style={{padding: "0 5px",width:'10%'}}>Name</h4>
            <h4 style={{padding: "0 0 0 10px"}}>Price</h4>
            <h4 style={{padding: "0 14px 0 0"}}>Category</h4>
            <h4>&nbsp;</h4><h4>&nbsp;</h4>
        </div>
        {context.dataBase.map((data)=>(<Item key={data.id} itemData={data}/>))}
    </div>
  )
}

export default Container