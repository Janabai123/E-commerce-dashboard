import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [company, setCompany] = useState('');
    const params=useParams();
const navigate=useNavigate();

    useEffect(()=>{
       
        getProductDetails();
    },[]);

const getProductDetails= async ()=>{
    console.log(params);
    let result =await fetch(`http://localhost:5000/product/${params.id}`,
        {headers:{
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }
    });
    result= await result.json();
    setName(result.name)
    setPrice(result.price)
    setCategory(result.category)
    setCompany(result.company)

    console.log(result)
}


    const updateProduct=async()=>{
        
console.log(name, price,category,company);
let result=await fetch(`http://localhost:5000/product/${params.id}`,{
    
    method:'Put',
    body:JSON.stringify({name,price,category,company}),
    headers:{
        'Content-Type':"application/json",
        
            authorization:`bearer ${JSON.parse(localStorage.getItem('token'))}`
        }

    
})
result=result.json();
console.log(result)
navigate('/');
    }
    return (
        <div className="product">
            <h1>Update Product</h1>
            <input type="text" placeholder="Enter Product name" className="inputBox" value={name} onChange={(e) => { setName(e.target.value) }}></input>
      
            
            <input type="text" placeholder="Enter Product price" className="inputBox" value={price} onChange={(e) => { setPrice(e.target.value) }}></input>
           
            <input type="text" placeholder="Enter Product category" className="inputBox" value={category} onChange={(e) => { setCategory(e.target.value) }}></input>
          
            <input type="text" placeholder="Enter Product company" className="inputBox"  value={company} onChange={(e) => { setCompany(e.target.value) }}></input>
            
           
            <button  onClick={updateProduct} className="appbutton"> UpdateProduct</button>

        </div>
    )
}
export default UpdateProduct;