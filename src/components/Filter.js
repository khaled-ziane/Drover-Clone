import React from "react";

function Filter(props) {
  return (
    <>
      <div className="filter">
        <h4>{props.data.length} Models Available</h4>
        <input
          type="text"
          placeholder="Search"
          onChange={props.searchInputHandler}
          value={props.search}
        />
        <div className="sorting">
          <h4>
            {props.load == -1 ? (
              <i className="fas fa-sort-amount-up-alt"></i>
            ) : (
              <i className="fas fa-sort-amount-down"></i>
            )}
            <span> Sort</span>
          </h4>
          <select onChange={props.sortHandler}>
            <option value="SORT BY">SORT BY</option>
            <option value="Best Value">Best Value</option>
            <option value="Price - Low to High">Price - Low to High</option>
            <option value="Price - High to Low">Price - High to Low</option>
          </select>
        </div>
      </div>
      {props.close ? (
        <div className="filtring">
          <div className="filtring-show">
            <h4>{props.radio}</h4>
            <a href="" onClick={props.closeFiltringHandler}>
              x
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Filter;
