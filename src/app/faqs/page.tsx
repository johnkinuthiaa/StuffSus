import Image from "next/image";
import FaqCard from "@/components/ui/faqCard";

export default function Faqs (){
    return(
        <div className={"bg-white"}>
            <img
                src={"https://images.unsplash.com/photo-1560264357-8d9202250f21?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3VzdG9tZXIlMjBzZXJ2aWNlJTIwZnVsbHNjcmVlbnxlbnwwfHwwfHx8MA%3D%3D"}
                 alt={"customer support image"}
                className={"h-[500px] object-bottom object-cover w-full"}
            />
            <div className={"-mt-16 pl-4 text-white"}>
                <p className={"font-bold"}>Need Help ?</p>
                <h1 className={"font-extrabold text-2xl"}>Frequently asked Questions</h1>
            </div>
            <h2 className={"mt-10  p-4 text-2xl text-black"}>General Questions</h2>
            <div className={"border border-b-gray-400 p-4 flex flex-col gap-5"}>
                <div className={"flex flex-wrap m-[auto] w-9/12 items-center justify-start"}>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                    <FaqCard heading={"How to Register and login"} text={"Registering for an account is even easie...you can log using any provider or using email and password style"}/>
                </div>
            </div>
        </div>
    )
}