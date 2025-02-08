import { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";

const BodyPage=()=>{
    useEffect(()=>{
            AOS.init({
                duration:1500,
                once:true
            })
        })

    return(
        <div>
        <div className="flex h-screen items-center justify-center p-10">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:px-10" >
            <div data-aos="fade-up">
              <h1 className="mb-2 text-3xl font-bold text-black"><span className="text-green-500">Welcome ,</span> To This Medical Page</h1>
              <p className="mb-6 text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut excepturi magnam enim officiis facilis numquam corporis quos accusantium tempora, dolores quod cum facere architecto soluta atque corrupti a alias perferendis.</p>
              <div className="flex justify-center space-x-5">
                <button className="flex w-full items-center justify-center gap-1 rounded-2xl bg-rose-500 p-5 py-3 font-semibold text-white hover:bg-rose-700">
                    Visit Now
                 
                </button>
                <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-5 py-3 font-semibold hover:border-2" >
                    Chat Us
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </button>
              </div>
            </div>
            <div>
              <div className="columns-1 md:columns-2 xl:columns-3 gap-7 ">
                <div className=" break-inside-avoid mb-8" data-aos="fade-right">
                    <img className="h-auto max-w-full rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out" src="https://pagedone.io/asset/uploads/1688031162.jpg" alt="Gallery image" />
                </div>
                <div className=" break-inside-avoid  mb-8" data-aos="fade-right">
                    <img className="h-auto max-w-full rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out" src="https://pagedone.io/asset/uploads/1688031232.jpg" alt="Gallery image" />
                </div>
                <div className=" break-inside-avoid  mb-8" data-aos="fade-up">
                    <img className="h-auto max-w-full rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out" src="https://pagedone.io/asset/uploads/1688031357.jpg" alt="Gallery image" />
                </div>
                <div className=" break-inside-avoid  mb-8" data-aos="fade-up">
                <img className="h-auto max-w-full rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out" src="https://pagedone.io/asset/uploads/1688031375.jpg" alt="Gallery image" />
                </div>
                <div className=" break-inside-avoid  mb-8" data-aos="fade-left">
                <img className="h-auto max-w-full rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out" src="https://pagedone.io/asset/uploads/1688031396.jpg" alt="Gallery image" />
                </div>
                <div className=" break-inside-avoid  mb-8" data-aos="fade-left">
                <img className="h-auto max-w-full rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out" src="https://pagedone.io/asset/uploads/1688031414.png" alt="Gallery image" />
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default BodyPage