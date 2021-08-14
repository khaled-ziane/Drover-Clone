import React from 'react'

function Footer() {
    return (
        <>
              <footer>
       <div className="footer-container">
           <div className="footer-box-1">
             <h1>Ready to find your new car?</h1>
           <div className="btn-footer"><button className="btn">Join Today</button></div>
           </div>
           <div className="footer-box-2">
             <ul>
               <h3>Drover HQ</h3>
               <a href=""><li>41 Chaltoon Street,<br />
                 London NW11JD</li></a>
                 <div className="icons-container">
                 <i className="fab fa-linkedin"></i>
                 <i className="fab fa-facebook"></i>              
                 <i className="fab fa-twitter"></i>
                 </div>
             </ul>
             <ul className="support">
               <h3>Support</h3>
               <a href=""><li>FAQs</li></a>
               <a href=""><li>Online Support</li></a>
               <a href=""><li>Phone support: 020 3848 4000</li></a>
               <a href=""><li>Phone hours: 9:00 - 16:00 Mon-Sun</li></a>
             </ul>
             <ul>
               <h3>Quick Links</h3>
               <a href=""><li>How it works</li></a>
               <a href=""><li>Short and medium</li></a>
               <a href=""><li>term</li></a>
               <a href=""><li>Affordable driving</li></a>
               <a href=""><li>Electric cars</li></a>
               <a href=""><li>Latest deals</li></a>
               <a href=""><li>Sell your old car</li></a>
             </ul>
             <ul>
               <h3>Resources</h3>
               <a href=""><li>Terms and Conditions</li></a>
               <a href=""><li>Cookie Policy</li></a>
               <a href=""><li>Subscription Terms</li></a>
               <a href=""><li>Fair Wear and Tear</li></a>
               <a href=""><li>Policy</li></a>
               <a href=""><li>Telematics Policy</li></a>
               <a href=""><li>Privacy Policy</li></a>
             </ul>
             <ul>
               <h3>Company</h3>
               <a href=""><li>Careers</li></a>
               <a href=""><li>Press</li></a>
             </ul>
           </div>
           <div className="footer-box-3">
             <p>Drover Limited is authorised and regulated by the Financial Conduct Authority for entering into regulated hire agreements<br />
              under firm reference number 773030. Joindrover.com is a trading name of Drover Limited which is an Appointed Representative<br />
               of Ambant Underwriting Services Limited, a company authorised and regulated by the Financial Conduct Authority under firm <br />
                reference number 597301 to carry on insurance distribution activities. Drover Limited is registered in England and Wales <br /> 
                company number 09829742. Registered office at 41 Chalton Street, London, NW1 1JD.</p>
           </div>
       </div>
    </footer>  
        </>
    )
}

export default Footer
