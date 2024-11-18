
import Image from "next/image"
import "../app/style/card.css"

export default function Card () {
    return(
     <>
    <div id="project" className="container">
        <h1 className="h1-text">Project</h1>
        <div className="main-card">
            
        <div className="card">
            <Image src="/photo.PNG" width={200} height={200} alt="cardimg"></Image>
            <div className="card-txt">
                <h3>Static Intrictive Resume</h3>
                <p>a Typescript-based Intrective resume <br />built with Html Css , <br />
                     allowing users to showcase <br /> their skills dyanamiclly</p>

     </div>
     
     
        </div>
        <div className="card">
            <Image src="/clock.PNG" width={200} height={200} alt="cardimg"></Image>
            <div className="card-txt">
                <h3>Analog clock</h3>
                <p>Analog Clock using HTML-CSS <br /> and Javascript</p>

     </div>
     
     
        </div>

        <div className="card">
            <Image src="/resume.PNG" width={200} height={200} alt="cardimg"></Image>
            <div className="card-txt">
                <h3>Shareable Resume Builder</h3>
                <p>shareable resume builder using <br /> html css typescript</p>

     </div>
     </div>
     <div className="card">
            <Image src="/image1.png" width={200} height={200} alt="cardimg"></Image>
            <div className="card-txt">
                <h3>Todo app</h3>
                <p>todo app build using next.js</p>

     </div>
     </div>
    
     
        </div>


      </div>

     


  
     
     
     
     </>

    )
}