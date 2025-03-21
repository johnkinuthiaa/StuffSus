"use client"
import {
    Chair, Checkroom,
    House, KeyboardArrowDown, KeyboardArrowUp,
    MusicNote,
    Phone,
    Search,
    ShoppingBasket,
    Storage, Tv
} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {Data} from "../../../data";
import ProductCard from "@/components/ui/ProductCard";
type Items ={
    image: string,
    category:string,
    type: string,
    color: string,
    initial:number,
    discount: number,
    name: string,
}
export default function All(){
    const[items,setItems] =useState<Items[]>([])
    const[showCategories,setShowCategories]=useState<boolean>(false)
    const pageLimit =items.length
    const [ITEMS_PER_PAGE,setItemsPerPage] =useState(10)
    const [itemIndex,setItemIndex]=useState(0)
    const [disableNextButton,setDisableNextButton]=useState<boolean>(false)
    const buttonsAvailable=Math.ceil(pageLimit/10)
    const[searchTerm,setSearchTerm] =useState<string>("")
    const[loading,setLoading] =useState<boolean>(false)

    useEffect(() => {
        setItems(Data)
        console.log(buttonsAvailable)
        setLoading(false)
    });
    const goNextPage =()=>{

        if(ITEMS_PER_PAGE<=pageLimit){
            setItemIndex(ITEMS_PER_PAGE+1)
            setItemsPerPage(ITEMS_PER_PAGE+10)
        }else{
            setDisableNextButton(true)
        }
    }
    const searchForProductByName =()=>{
        const itemFound:Items[]|undefined=items.filter((item:Items)=>{
            return item.name.toLowerCase()===searchTerm.toLowerCase()
        })
        setItems(itemFound)
    }
    const filterSearch =(name:string)=>{
        const itemFound =Data.filter((item)=>{
            return item.category.toLowerCase()===name.toLowerCase()
        })
        setItems(itemFound)
    }

    return(
        <>
            <div className={"font-extrabold text-white flex items-center justify-center m-[auto] w-[80%] text-9xl bg-transparent -mt-20 absolute z-[1]"}>
                <h1>Shop</h1>
            </div>
            <div className={"h-fit absolute z-[2] rounded-t-full flex flex-col w-11/12 content-center items-center m-8 [&>*]:p-4 bg-white [&>*]:bg-white"}>
                <div className={"flex justify-between w-11/12 rounded-full"}>
                    <p className={"font-extrabold text-2xl"}>Give All you need</p>
                    <div className={"flex items-center w shadow rounded-full "}>
                        <Search/>
                        <input placeholder={"Search for item"} className={"border-0 outline-0 p-3"} onChange={(e)=>{
                            e.preventDefault()
                            setSearchTerm(e.target.value)
                        }}/>
                        <button className={"bg-black text-white rounded-full p-3 font-bold"} type={"submit"} onClick={(e)=>{
                            e.preventDefault()
                            searchForProductByName()
                        }}>Search</button>
                    </div>
                </div>
                <div className={"flex gap-10 items-start justify-center"}>
                    <div className={"flex flex-col flex-2/12 border-r border-r-gray-200 ml-16 "}>
                        <p className={"text-xl font-bold"}>Category</p>
                        <div className={"flex justify-between [&>*]:flex items-center hover:bg-[whitesmoke] cursor-pointer p-1"}>
                            <div className={"gap-2 "}>
                                <ShoppingBasket/>
                                <p >All Products</p>
                            </div>
                            <div className={"gap-2 items-center"}>
                                <div className={"bg-red-500 h-fit w-fit text-white text-sm font-bold  rounded-full p-1"}>{items.length}</div>
                                <button
                                    className={"cursor-pointer rounded-full p-2"}
                                    onClick={()=>setShowCategories(!showCategories)}
                                >
                                    {showCategories?<KeyboardArrowUp/>:<KeyboardArrowDown/>}
                                </button>
                            </div>
                        </div>
                        <div
                            className={`${showCategories?"visible":"invisible"} m-4 gap-2 [&>*]:p-2 [&>*]:cursor-pointer flex flex-col [&>*]:text-md [&>*]:text-gray-600 [&>*]:rounded-2xl [&>*]:hover:text-black [&>*]:hover:bg-[whitesmoke]`}>
                            <div className={"flex gap-3"}>
                                <House/>
                                <button onClick={()=> {
                                    filterSearch("home")

                                }}>For Home</button>
                            </div>
                            <div className={"flex gap-3"}>
                                <Chair/>
                                <button onClick={()=> {
                                    filterSearch("furniture")

                                }}>For Home</button>
                            </div>
                            <div className={"flex gap-3"}>
                                <Checkroom />
                                <button onClick={()=> {
                                    filterSearch("Clothing")

                                }}>Clothing</button>
                            </div>
                            <button className={"flex gap-2"}>
                                <MusicNote/>
                                <p onClick={()=> {
                                    filterSearch("music")
                                }}>For Music</p>
                            </button>
                            <button className={"flex gap-2"}>
                                <Phone/>
                                <p onClick={()=> {
                                    filterSearch("electronics")
                                }}>For Phone</p>
                            </button>
                            <button className={"flex gap-2"}>
                                <Storage/>
                                <p onClick={()=> {
                                    filterSearch("storage")
                                }}>For Storage</p>
                            </button>
                            <button className={"flex gap-2"}>
                                <Tv/>
                                <p onClick={()=> {
                                    filterSearch("televisions")
                                }}>For Electronic</p>
                            </button>
                        </div>

                    </div>
                    {loading&&<div className={"p-4 border-b-red-500 rounded-full animate-spin absolute z-10"}></div>}
                    <div className={"flex w-full min-w-[80%] flex-10/12"}>
                        <div className={"gap-2"}>
                            {items.length>0?(
                                <>
                                    <div className={"gap-6 flex flex-wrap w-[100%] [&>*]:shadow [&>*]:p-4"}>
                                        {items.slice(itemIndex,ITEMS_PER_PAGE).map((item,index)=>(
                                            <ProductCard
                                                key={index}
                                                image={item.image}
                                                category={item.category}
                                                initial={item.initial}
                                                discount={item.discount}
                                                name={item.name}/>
                                        ))}
                                    </div>
                                    <div className={"flex items-center w-[80%] justify-center"}>
                                        <button className={`${disableNextButton&&"invisible cursor-not-allowed  disabled:cursor-not-allowed disabled:bg-gray-600"} bg-black p-3 text-white rounded-2xl font-bold cursor-pointer hover:bg-[rgb(0,0,0,0.8]`} onClick={(e)=>{
                                            e.preventDefault()
                                            if(!disableNextButton) {
                                                goNextPage()
                                            }
                                        }}>next Page</button>
                                    </div>
                                </>

                            ):(
                                <>
                                    <div className={"font-extrabold text-3xl"}>No data found</div>
                                </>

                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}
