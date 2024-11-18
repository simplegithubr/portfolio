import Image from "next/image"
import "../app/style/about.css"

export default function About (){
    return(
      <>
      <div id="about" className="about-had">
        <div className="container">
            <h1 className="text-h1">About</h1>
            <div className="main-about">
                
                <div className="text-about">
                    <p className="p-text">i am a student at GIAIC, pursuing a course in Artificial Intelligence, <br />
                     Web 3.0, & Metaverse.
                         Passionate about technoLogy and 
                        constantly <br /> learning  new skills to stay up-to-date with the latest  </p>
                </div>

                <div className="img">
                    <Image src="/aboutimg.jpg" width={200} height={200} alt="about-img"></Image>
                </div>



            </div>




        </div>



      </div>
      
      
      
      
      </>
    )
  }
  