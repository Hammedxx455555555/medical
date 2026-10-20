import About from "./About/About"
import Nav from "./components/Nav"
 import Home from "./Home/Home"
import Loader from "./Components/Loader"
import { useState, useEffect } from "react"
import Services from "./Services/Services"
import { TeamSection } from "./Company profile/Team"
import { ProjectsSection } from "./Company profile/Projects"
import { ContactSection } from "./Contact/Contact"
import { BrowserRouter as Router,Routes, Route} from "react-router-dom"
import Footer from "./Components/Footer"
import ScrollToTop from "./Components/ScrollToTop"

const App = ()=>{
  const [isloading,setIsLoading] = useState(true)
  useEffect(()=>{
          const timer = setTimeout(()=>{
            setIsLoading(false)
            clearTimeout(timer)
          },3500)
  },[])
  return(
    <>
   {isloading? <Loader/>: 

   <>
    <Router>
             <Nav/>
             <ScrollToTop/>
      <Routes>
    
<Route path="/" Component={Home} />
<Route path="/about-us" Component={About}/>
<Route path="/services" Component={Services} />
<Route path="/teams" Component={TeamSection} />
<Route path="/projects" Component={ProjectsSection} />
<Route path="/contact-us" Component={ContactSection}  />

      </Routes>
<Footer/>

    </Router>

    </>
   }
    
    </>
  )
}
export default App