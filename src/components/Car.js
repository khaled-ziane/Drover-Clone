import React from 'react'

function Car(props) {
    return (
        <>
            <section className="car" key={props.car.id} >
             <div className="flex-price-box">
            <h4>New 21-Plate!</h4>
            <div className="flex-price-right">
            <h2>£{props.car.price}<span>/mo</span></h2>
            <p>for {props.car.duration} months</p>
            </div>
            </div>
            <img src={props.car.img}  />
              <div className="car-name">
            <h4>{props.car.name}</h4>
            <p>{props.car.description}</p>
            </div>
            <hr />
             <div className="car-control">
              <p>{props.car.control} <span>{props.car.type}</span> </p>
              </div>
     </section> 
        </>
    )
}

export default Car
