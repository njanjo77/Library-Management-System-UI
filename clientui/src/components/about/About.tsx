import { Navbar } from "../navbar/Navbar"
import libpic from "../../assets/libpic.png"
import { Footer } from "../footer/Footer"

export const About = () => {
  
  return (
    <>
    <Navbar />
    <div>
        <img src={libpic} alt="Library Image" width="900" height="400"/>
    </div>
    <div>
        <h1>About Our Library</h1>
        <p>Our library offers a vast collection of books, digital resources, and community programs to foster learning and growth.</p>
        <p>Improve your study skills by joining us and get to borrow books so that you can continue learning from the comfort of your home</p>
    </div>
    <Footer />
    </>
  )
}
