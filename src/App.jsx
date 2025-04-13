import React, { useEffect, useState } from 'react'
import Products from './Products';
import axios from 'axios';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import Filter from './Filter';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try{
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data);
        setData(res.data);
      }catch(err){
        console.log("Error While fetching the data: ", err.message);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <Navbar/>
        <PageTitle/>
        
        <div style={{display : "flex"}}>
          <Filter />
          <div>
            {data.map((item) => <Products key={item.id} item={item}/>)}
          </div>
        </div>
      </div>
    </>
  )
}

export default App;