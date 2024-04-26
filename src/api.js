import axios from "axios";
import React from "react";

const URL = 'http://localhost:3000/products';
export const getData = async()=>{
    return await axios.get(URL);
}

export const postData = async(data)=>{
    return await axios.post(URL,data,{
        headers:{
            'Content-Type':'application/json'
        }
    })
}

export const putData = async(id,data)=>{
    return await axios.put(`${URL}/${id}`,data,{
        headers:{
            'Content-Type':'application/json'
        }
    })
}

export const deleteData = async(id)=>{
    return await axios.delete(`${URL}/${id}`);
}