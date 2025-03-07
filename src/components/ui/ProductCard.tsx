import {Star} from "@mui/icons-material";

type Items ={
    image: string,
    category:string,

    initial:number,
    discount: number,
    name: string,
}
const ProductCard =({image,category,initial,discount,name}:Items)=>{
    return(
        <div className={"rounded-2xl w-80 flex [&>*]:leading-12 flex-col mb-5 gap-2 relative"}>
            <img src={image} alt={name} className={"rounded-2xl h-80"}/>
            <div className={"p-1 rounded-full bg-white text-black right-5 mt-4 text-sm font-bold absolute"}>{category}</div>
            <h2 className={"font-bold text-2xl"}>{name}</h2>
            <div className={"flex justify-between"}>
                <p className={"text-yellow-500"}>
                    <Star/>
                    <span className={"text-black"}>{(initial*5/2).toPrecision()} reviews</span>
                </p>
                <h2 className={"font-bold"}>${(initial-discount).toFixed(2)}</h2>
            </div>
            <div className={"flex justify-between gap-2 [&>*]:rounded-full [&>*]:p-2 font-bold [&>*]:leading-7"}>
                <button className={"text-black border border-gray-600 outline-0"}>Add To Cart</button>
                <button className={"bg-black text-white"}>Buy Now</button>
            </div>
        </div>
    )
}
export default ProductCard