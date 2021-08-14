import React from 'react'

function Budget(props) {
    return (
        <>
             <div className="budget">
                    <h4>Monthly budget</h4>
                   <p>£150 - £{props.changeValue*50}</p>
                   <input type="range" id="vol" name="vol"  min="3" max="30"  className="input-range" onChange={props.sortHandler}/>
               </div>
        </>
    )
}
export default Budget
