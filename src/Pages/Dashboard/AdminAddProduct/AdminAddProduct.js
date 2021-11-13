import React from 'react';
import { useForm } from "react-hook-form";
import './AdminAddProduct.css'

const AdminAddProduct = () => {

    const { register, handleSubmit ,reset } = useForm();


    const onSubmit = data => {
        console.log(data)
        fetch('https://mysterious-gorge-62564.herokuapp.com/products/add' , {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('success')
                reset();
               
            }
        })
        reset()
    }
    return (
        <div>
            
            
            <div className='add-product'>
            <h2>Add New Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
        <input type="number" {...register("key", {required: true})} placeholder="Unique Number Or Key" />
        <input {...register("img", { required: true, maxLength: 200 })} placeholder="imgUrl" />
      <input {...register("name", { required: true, maxLength: 200 })} placeholder="Product Name"/>
      
      <input {...register("brand", { required: true, maxLength: 200 })} placeholder="Brand"/>
      <input {...register("shop", { required: true, maxLength: 200 })} placeholder="Shop" />
      
      <input type="number" {...register("price", { required: true })} placeholder="Discount Price" />
      <input type="number" {...register("mainPrice", {required: true })} placeholder="Main Price" />
      <input {...register("warenty", { required: true, maxLength: 200 })} placeholder="Warenty"/>
      <input {...register("discount", { required: true, maxLength: 200 })} placeholder="Discount" />
      <input type="submit" />
    </form>
        </div>
        </div>
    );
};

export default AdminAddProduct;