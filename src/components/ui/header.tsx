"use client"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import MiniCart from "@/components/ui/miniCart";
import {usePathname} from "next/navigation";
import Link from "next/link";



const Header =()=>{
    const[showCart,setShowCart] =useState<boolean>(false)
    const pathname =usePathname()

    return (
        <header className={"p-4 outline-1 outline-gray-300  fixed rounded-b-2xl shadow-2xl z-10  bg-white top-0 w-[90%] ml-[6%]"}>
            <nav className={"[&>*]:flex  flex items-center justify-between"}>
                <div>
                    <h1 className={"font-bold"}>Stuffsus</h1>
                </div>
                <ul className={"flex gap-5 [&>*]:p-2 [&>*]:hover:bg-black [&>*]:hover:p-2 [&>*]:hover:rounded-full [&>*]:hover:text-white justify-between [&>*]:cursor-pointer [&>*]:text-[rgb(0,0,0,0.7)] [&>*]:active:text-white  [&>*]:active:bg-[rgb(0,0,0,0.8)] font-medium"}>
                    <li className={pathname==="/"?"text-blue-700":"bg-transparent"}>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li><Link href={"/faqs"}>FAQs</Link></li>
                </ul>
                <ul className={"flex items-center justify-between gap-4 [&>*]:cursor-pointer"}>
                    <li><SearchIcon/></li>
                    <li><button onClick={()=>{
                        setShowCart(!showCart)
                    }} className={"cursor-pointer"}><ShoppingCartIcon/></button></li>
                    <li>
                        <img
                            src={"https://i.pinimg.com/474x/61/3f/a9/613fa91b9e5460b5a9372d63df7a963f.jpg"}
                            alt={"profile"}
                            height={80}
                            className={"h-12 w-12 rounded-full"}
                            width={80}
                        />

                    </li>
                </ul>
            </nav>
            {showCart&&<MiniCart/>}
        </header>
    )
}
export default Header