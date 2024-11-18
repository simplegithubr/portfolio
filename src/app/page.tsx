import About from "@/components/About"
import Hero from "../components/Hero"
import Card from "@/components/Card"
import Skills from "@/components/Skills"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function Home (){
  return(
    <div>
    <Hero/>
    <About/>
    <Card/>
    <Skills/>
    <Contact/>
    <Footer/>
    </div>
  )
}
