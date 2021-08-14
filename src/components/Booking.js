import React from 'react'

function Booking(props) {
    return (
        <>
               <div className="booking">
                 <h4>Booking duration</h4>
                              <div className="flex-radio">
                   {props.radio=="Any duration" ?         
                   <input type="radio" id="any" name="duration" value="Any duration" className="input-radio" onChange={props.sortHandler} checked />
                    :<input type="radio" id="any" name="duration" value="Any duration" className="input-radio" onChange={props.sortHandler}  /> } 
                   <label htmlFor="any">Any duration</label><br />
                               </div>
                               <div className="flex-radio">
                   <input type="radio" id="1-6" name="duration" value="1 to 6 months" className="input-radio" onChange={props.sortHandler}  />
                   <label htmlFor="1-6">1 to 6 months</label><br />
                               </div>
                               <div className="flex-radio">
                   <input type="radio" id="7-12" name="duration" value="7 to 12 months"className="input-radio" onChange={props.sortHandler}  />
                    <label htmlFor="7-12">7 to 12 months</label><br />
                                </div>
                                <div className="flex-radio">
                    <input type="radio" id="13-18" name="duration"  value="13 to 18 months"className="input-radio" onChange={props.sortHandler}  />
                   <label htmlFor="13-18">13 to 18 months</label><br />
                                </div>
                               <div className="flex-radio">
                   <input type="radio" id="19-24" name="duration"  value="19 to 24 months" className="input-radio" onChange={props.sortHandler} />
                   <label htmlFor="19-24">19 to 24 months</label>              
                                </div>
               </div>
        </>
    )
}

export default Booking
