import React ,{useState,useEffect} from 'react'
import data from './data'
import bestdata from './bestdata'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Savecode from './components/Savecode'
import Location from './components/Location'
import Booking from './components/Booking';
import Budget from './components/Budget';
import Makesearch from './components/Makesearch';
import Seats from './components/Seats';
import Filter from './components/Filter'
import Car from './components/Car'
import Pagination from './components/Pagination';
import SpecificCar from './components/SpecificCar';
import Footer from './components/Footer'

function App() {
  const [sort, setsort] = useState(data)
  const [check, setcheck] = useState(false)
  const [load, setload] = useState(0)
  const [changeValue, setchangeValue] = useState(30)
  const [radio, setradio] = useState("Any duration")
  const [close, setclose] = useState(false)
  const [search, setsearch] = useState('')
  const [currentPage, setcurrentPage] = useState(1)
  const [postPerPage, setpostPerPage] = useState(50)
   const indexLastPage = currentPage * postPerPage;
   const indexFirstPage = indexLastPage - postPerPage;
   const currentPost = data.slice(indexFirstPage,indexLastPage);
   useEffect(() => {
      setsort(currentPost)
   }, [currentPage])
   console.log(data)
   var pageNumbers = []
   for(var i=1 ;i<=(Math.ceil((data.length)/postPerPage));i++) {
    pageNumbers = [...pageNumbers,i]
   }
  const changePageHandler = (number)=> {
       setcurrentPage(number)
      //  setsort(currentPost) 
  }
  const sortHandler = (e) => {
    if (e.target.value=="Price - Low to High") {
      console.log("low to high")
      setload(-1)
    const newasc = sort.sort(function(a,b){return a.price-b.price})
    setsort(newasc)
    }else if(e.target.value=="Price - High to Low"){
      console.log("high to low")
      setload(1)
      const newdsc = sort.sort(function(a,b){return b.price-a.price})
      setsort(newdsc)
    }else if(e.target.value=="Best Value") {
      console.log("best value")
      setload(0)
      console.log(bestdata)
      // setsort(bestdata)
      setsort(currentPost)
    }
   if(e.target.value=="1 to 6 months") {
     console.log("radio 1 to 6 !")
     setradio("1 to 6 months")
     setclose(true)
     const newTableFilter = data.filter((car) => (1<=car.duration) && (car.duration<=6))
     setsort(newTableFilter)
   }else if(e.target.value=="7 to 12 months") {
    console.log("radio 7 to 12 !")
    setradio("7 to 12 months")
    setclose(true)
    const newTableFilter = data.filter((car) => (7<=car.duration) && (car.duration<=12))
     setsort(newTableFilter)
   }else if(e.target.value=="13 to 18 months") {
    console.log("radio 13 to 18 !")
    setradio("13 to 18 months")
    setclose(true)
    const newTableFilter = data.filter((car) => (13<=car.duration) && (car.duration<=18))
     setsort(newTableFilter)
   }else if (e.target.value=="19 to 24 months") {
    console.log("radio 19 to 24 !")
    setradio("19 to 24 months")
    setclose(true)
    const newTableFilter = data.filter((car) => car.duration>=19)
     setsort(newTableFilter)
   }else if(e.target.value=="Any duration"){
     console.log("Any duration")
     setclose(false)
    //  setsort(data)
     setsort(currentPost) 
    }
if((e.target.value>=3) && (e.target.value<=30)) {
    console.log("range working")
    console.log(e.target.value)
    const v = e.target.value
    setchangeValue(v)
    console.log(changeValue*50)
    const newTableFilter = sort.filter((car)=> car.price<=changeValue*50 )
    setsort(newTableFilter)
  }

  }
  const checkHandler =()=> {
    setcheck(!check)
  }
  const closeFiltringHandler =(e)=> {
       console.log("close working fine")
       setclose(false)
       setradio("Any duration")
      //  setsort(data)
      setsort(currentPost)
       e.preventDefault()
  }
  const searchInputHandler =(e)=> {
    var val = e.target.value
    console.log(val)
    setsearch(val) 
    console.log(val)
    val = val.toLowerCase()
    const newTableFilter = data.filter(
       function (car) {
        return (car.name.toLowerCase().includes(val))   
      })   
           setsort(newTableFilter)
           if (val=='') {setsort(currentPost)}
      }     

      const closeNavHandler = () => {
        setcheck(false)
      }

  return (
    <>
         <Header  checkHandler={checkHandler} />
         <Navbar check={check} /> 
      <main onClick={closeNavHandler}>
         <Savecode />     
      <div className="row">
        <div className="col-1">
          <Location />
          <Booking  sortHandler={sortHandler}  radio={radio} />
          <Budget sortHandler={sortHandler}  changeValue={changeValue} />
          <Makesearch />
          <Seats />  
        </div>
        <div className="col-2">
          <Filter 
               data={data} 
               searchInputHandler={searchInputHandler} 
               search={search} 
               load={load} 
               sortHandler={sortHandler}
               close={close}
               radio={radio} 
               closeFiltringHandler={closeFiltringHandler}
          />
           <div className="cars">
            {sort.map((car)=> { 
             return <Car car={car}/>
             })}
             </div>
             <Pagination 
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                changePageHandler={changePageHandler}
                 />
             <SpecificCar />
        </div>
      </div>
    </main>
<Footer />
         
    </>
  );
}

export default App;


