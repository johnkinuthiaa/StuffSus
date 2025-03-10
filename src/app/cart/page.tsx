"use client"
import CartCard from "@/components/ui/CartCard";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Data} from "../../../data";

type CartItems={
    image: string,
    category:string,
    type: string,
    color: string,
    initial:number,
    discount: number,
    name: string,
}

export default function Cart(){
    const[cartItems,setCartItems] =useState<CartItems[]>([])
    const[price,setPrice]=useState<number>(0)
    const[totalDiscount,setTotalDiscount]=useState<number>(0)
    const[shippingFee,setShippingFee]=useState<number>(50)
    const[grandTotal,setGrandTotal]=useState<number>(0)
    const SHIPMENT_FEE =0
    useEffect(() => {
        setCartItems(Data.slice(0,6))

    }, []);

    return(
        <div className={"flex flex-col m-auto mt-15 p-4 justify-center items-center w-6/12"}>
            <h1 className={"mt-10 font-bold text-2xl"}>My Cart</h1>
            <div className={"flex gap-6 mt-8"}>
                {cartItems.length>0?(
                    <div className={"[&>*]:w-[600px] [&>*]:leading-7"}>
                        <div className={"flex justify-between items-start [&>*]:font-bold mb-10 align-middle"}>
                            <p>Product image</p>
                            <p>Product Desc</p>
                            <p>Price</p>
                        </div>
                        <div>
                            {cartItems.map((cartItem: CartItems, index: number) => (
                                <CartCard image={cartItem.image}
                                          category={cartItem.category}
                                          type={cartItem.type}
                                          color={cartItem.color}
                                          initial={cartItem.initial}
                                          discount={cartItem.discount}
                                          name={cartItem.name}
                                          key={index}
                                />
                            ))}
                        </div>

                        </div>

                ):(
                    <h1 className={"font-bold text-black"}>Cart id empty</h1>
                )}
                <div className={"ml-10 w-[300px] shadow-2xl outline-gray-300 outline-1 h-fit mb-10 p-4 rounded-2xl"}>
                    <p className={"font-bold text-2xl"}>Your order</p>
                    <div className={"flex flex-col gap-5 [&>*]:flex justify-between w-full mt-6"}>
                        <div className={"justify-between [&>p]:font-bold"}>
                            <p>subtotal</p>
                            <p>${price.toFixed(2)}</p>
                        </div>
                        <div className={"justify-between [&>p]:font-bold"}>
                            <p>Discount</p>
                            <p>${totalDiscount.toFixed(2)}</p>
                        </div>
                        <div className={"justify-between [&>p]:font-bold"}>
                            <p>Shipment Cost</p>
                            <p>${shippingFee}</p>
                        </div>
                        <div className={"justify-between [&>p]:font-bold"}>
                            <p>Grand total</p>
                            <p>${grandTotal}</p>
                        </div>

                    </div>
                    <button className={"bg-black text-white text-md rounded-xl cursor-pointer w-full font-bold mt-5 p-2"}>Continue to payment</button>
                </div>
            </div>
        </div>
    )
}