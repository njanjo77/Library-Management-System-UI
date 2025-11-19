import { Footer } from "./footer/Footer"
import libfront from "../assets/libfront.jpg"




export const LandingPage = () => {
  return (
    <>
  


    <div className="flex flex-col-reverse md:flex-row justify-center gap-2 h-fit md:p-8">
    <div className="w-full md:w-fit items-center">
        <img src={libfront} alt="Library Image" width="450" height="200"/>
    </div>
    <div className="w-full md:w-fit border-2 border-red-400  p-2" >
        <h1 className=" text-4xl text-red-700 font-extrabold ">Welcome to the the best library Manager</h1>
        <p>Get your study groove on by joining the best library in town</p>
    </div>
    </div>
    <Footer />
    </>
  )
}
