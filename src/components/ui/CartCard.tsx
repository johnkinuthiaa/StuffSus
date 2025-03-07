"use client"
import React, {useState} from "react";
import Image from "next/image";
import {Add, Delete, Remove} from "@mui/icons-material";


type CartItems={
    image: string,
    category:string,
    type: string,
    color: string,
    initial:number,
    discount: number,
    name: string,
}
const CartCard =({image,category,type,color,initial,discount,name}:CartItems)=>{
    const[price,setPrice] =useState<number>(initial-discount)
    const[quantity,setQuantity] =useState<number>(1)
    return(
        <div className={"flex gap-4 border-b-gray-200 border-b mb-4 justify-between"}>
            <img src={image} alt={name} className={"rounded-2xl h-28 w-28"}/>
            <div className={"flex flex-col gap-2"}>
                <p className={"p-1 border border-gray-300 rounded-full w-fit"}>{category}</p>
                <h2 className={"font-bold"}>{name.length>10?name.substring(0,15)+"...":name}</h2>
                <p className={"text-gray-400"}>Type <span>{type}</span></p>
                <p className={"text-gray-400"}>Type <span>{color}</span></p>
            </div>
            <div className={"flex flex-col gap-2 mr-2 mb-2"}>
                <p className={"line-through font-medium text-gray-600"}>${initial}</p>
                <p className={"font-bold text-xl text-black flex flex-wrap"}>${price.toFixed(2)}</p>
                <div className={"rounded-2xl flex gap-2 align-middle content-center bg-[whitesmoke] [&>*]:cursor-pointer p-1"}>
                    <button onClick={()=> {
                        setQuantity(quantity >0?quantity-1:quantity)
                        setPrice(price*quantity)
                    }}><Remove/></button>
                    <h2 >{quantity}</h2>
                    <button onClick={()=> {
                        setQuantity(quantity + 1)
                        setPrice(price*quantity)
                    }}><Add/></button>
                </div>
                <div className={"flex"}>
                    <button><Delete/></button>
                </div>
            </div>
        </div>
    )
}
export default CartCard