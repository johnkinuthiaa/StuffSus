"use client"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const Header =()=>{
    return (
        <header className={"p-4 m-4 rounded-full shadow-xl absolute bg-white top-0 w-[90%] ml-[6%]"}>
            <nav className={"[&>*]:flex  flex items-center justify-between"}>
                <div>
                    <h1 className={"font-bold"}>Stuffsus</h1>
                </div>
                <ul className={"flex justify-between gap-4 [&>*]:cursor-pointer [&>*]:text-[rgb(0,0,0,0.7)] [&>*]:hover:text-black [&>*]:active:text-black font-medium"}>
                    <li>Beranda</li>
                    <li>Shop</li>
                    <li>Blog</li>
                </ul>
                <ul className={"flex items-center justify-between gap-4"}>
                    <li><SearchIcon/></li>
                    <li><ShoppingCartIcon/></li>
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
        </header>
    )
}
export default Header