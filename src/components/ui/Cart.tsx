"use client"
import CloseIcon from '@mui/icons-material/Close';
import {useEffect, useState} from "react";
import {Data} from "../../../data"
import CartCard from "@/components/ui/CartCard";
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
    const [itemsTotal,setItemsTotal] =useState(0)
    useEffect(() => {
        setCartItems(Data.slice(0,4))
        setItemsTotal(cartItems.length)
    }, []);
    const[showCart,setShowCart] =useState(true)

    return(
        <div className={`${showCart?"visible ":"invisible"} absolute rounded-2xl bg-white text-black right-30 top-25 w-[450px] flex flex-col p-4 `}>
            <div className={"flex justify-between p-2 font-bold border-b-gray-600"}>
                <h1>My Cart ({itemsTotal})</h1>
                <button
                    className={"outline-0 bg-transparent text-gray-600 cursor-pointer"}
                    onClick={()=>{
                        setShowCart(false)
                    }}
                ><CloseIcon/></button>
            </div>
            <div className={"shadow rounded-2xl p-2"}>
                <p>Items</p>
                {cartItems.length>0?(
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
                        <button className={"w-full p-2 rounded-full font-bold border bg-[rgb(247, 247, 247)] border-gray-200 cursor-pointer hover:bg-[whitesmoke]"}>view all</button>
                    </div>

                ):(
                    <h1 className={"font-bold text-black"}>Cart id empty</h1>
                )}
            </div>
        </div>
    )
}