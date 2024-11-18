import "../app/style/contact.css"

export default function Contact (){
    return(
    <>
    <div id="contact" className="had-contact">
        <div className="container">
        
            <div className="main-cover">
            <h1 className="text-h1">Contact</h1>
            <div className="main-contact">
            
            <form action="">
                <div className="form-group">
                    <input type="text" placeholder="Enter Your Name" />

                </div>
                <div className="form-group">
                    <input type="email" placeholder="Enter Your Email"/>

                </div>
                <div className="form-group">
                    <textarea cols={30} rows={5} placeholder="Enter Your Message"></textarea>

                </div>
                <input id="btn" type="submit" value="send" />





            </form>




        </div>
        </div>

        </div>

    </div>
    
    
    
    
    
    </>
    )
}