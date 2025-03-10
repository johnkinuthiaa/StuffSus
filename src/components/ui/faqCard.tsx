type faq={
    heading:string,
    text:string
}
export default function FaqCard({heading,text}:faq){
    return(
        <div className={"flex flex-col gap-2 w-[350px] mt-10 p-2 leading-7"}>
            <h2 className={"text-black font-bold text-xl"}>{heading}</h2>
            <p className={"text-gray-600 mt-2"}>{text}</p>
        </div>
    )
}