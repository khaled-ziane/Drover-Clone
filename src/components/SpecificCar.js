import React from 'react'

function SpecificCar() {
    return (
        <>
             <div className="specific-car">
                  <div className="specific-car-container">
               <h2>Looking for a specific car?</h2>
               <p>Let's us know what car you are looking for,and we 'll be in touch!</p>
               <input type="text" placeholder="Your name *" /> <br />
               <input type="text" placeholder="Your email address *" /> <br />
               <input type="text" placeholder="Your telephone / mobile *" /> <br />
               <input type="text" placeholder="What are you looking for? *" /> <br />
               <label >When do you want a car?</label> <br />
               <select >
                   <option >This month</option>
                   <option >Within 3 months</option>
                   <option >Within 6 months</option>
                   <option >6 months +</option>
               </select>
               <div className="check-container">
                 {/* <input type="checkbox" id="test" className="check-input"/> */}
                 <label htmlFor="test">I would like to receive updates about 
                 discounts, special offers, news and events from Drover.</label>
               </div>
                <div className="btn-container"><button className="btn">Find my car</button></div>
               </div>
             </div> 
        </>
    )
}

export default SpecificCar
