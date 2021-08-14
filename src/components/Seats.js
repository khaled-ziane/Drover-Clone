import React from 'react'

function Seats() {
    return (
        <>
              <div className="seats">
                 <h4>Numbers of Seats</h4>
                 <p>2-9 Seats</p>
               <input type="range" id="vol" name="vol" min="2" max="9" className="input-range"/>
               </div>
               <p className="see-more-filter">See more filters</p>
        </>
    )
}

export default Seats