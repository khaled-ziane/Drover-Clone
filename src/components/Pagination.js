import React from 'react'

function Pagination(props) {
    return (
        <>
              <div className="pagination">
                   <h4>Showing 1-30 of 37 result</h4>
                    <ul>
                      {props.pageNumbers.map((number,index)=> { 
                            return<span>
                              {props.currentPage==number ? 
                                 <button onClick={()=>props.changePageHandler(number)} className="current-page"><li key={index}>{number}</li></button>
                              :  <button onClick={()=>props.changePageHandler(number)}><li key={index}>{number}</li></button>
                            }
                           
                            </span>
                          }
                        )}
                    </ul>
              </div> 
        </>
    )
}

export default Pagination
