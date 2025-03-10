
import All from "@/components/ui/All";

export default function Home() {
  return (
      <div className={"relative"}>
          <div className={" "}>
              <img
                  src={"https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                  alt={"home image"}
                  className={"lg:w-[1920px] sm:w-full md:w-full sm:h-28 md:h-32 lg:h-[400px] object-fill object-center"}
              />

          </div>
          <div className={"w-full mt-[-80px]"}>
              <All/>
          </div>
      </div>
  )
}
