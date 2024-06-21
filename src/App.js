import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import {apiUrl, filterData} from './data';
import { toast } from 'react-toastify';
import Spinner  from './components/Spinner';
import 'react-toastify/dist/ReactToastify.css';


const App =()=> {
  
const [courses, setCourses] = useState(null)
const [loading,setLoading] = useState(true);
const [category, setCategory] =useState(filterData[0].title); 

  async function fetchData(){
    setLoading(true);
    try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        console.log(output);
        setCourses(output.data);
    }
    catch(error){
       toast.error("Something went wrong")
      
    }
    setLoading(false);
  };

  useEffect(()=>{
    fetchData();
  },[]);
   

  return (
    <div className="wrapper">
     <Navbar/>

     <Filter filterData={filterData}
     category={category}
     setCategory={setCategory}/>
     <div className="cards-container">
      {
      loading? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
     }
     </div>
    
    </div>
  );
}

export default App;
