import Link from "next/link";

export default function Footer(){
    return(
        <div className={"flex-col gap-2 w-8/12 m-auto flex items-center justify-start mb-5"}>
            <div className={"p-4 gap-4 mt-10 bottom-0 rounded-3xl bg-black m-auto flex items-center justify-start"}>
                <div className={"rounded-2xl p-2 gap-5 flex justify-between w-full "}>
                    <div className={"flex flex-col gap-4 "}>
                        <h2 className={"font-bold text-white"}>Ready to Get Our New Stuff</h2>
                        <form className={"rounded-full p-1 bg-white"}>
                            <input type={"email"} required={true} className={"outline-0 bg-white"} placeholder={"Your Email..."}/>
                            <button type={"submit"} className={"rounded-full bg-black cursor-pointer text-white p-1 pl-2 pr-2 font-bold"}>send</button>
                        </form>
                    </div>
                    <div className={"mt-2 flex flex-col text-white w-[500px]"}>
                        <h3 className={"font-bold text-2xl mb-2"}>Stuffus for Home and Needs</h3>
                        <p>We&#39;ll listen to your needs, identity the best approach then contact you</p>
                    </div>
                </div>
            </div>
            <div className={"flex justify-between w-8/12 items-between p-4"}>
                <div className={"flex gap-4"}>
                    <div className={"flex flex-col gap-2"}>
                        <Link href={"/blog"}>Blog</Link>
                        <Link href={"/contact-us"}>Contact us</Link>
                    </div>
                    <div className={"flex flex-col gap-2"}>
                        <Link href={"/blog"}>Return</Link>
                        <Link href={"/blog"}>FAQ</Link>
                    </div>
                </div>
                <div className={"mt-10 flex"}>

                </div>
            </div>
            <div className={"flex justify-between border-t-black"}>
                <p>&copy {new Date().getFullYear()}</p>
                <p>slippery</p>
            </div>
        </div>
    )

}