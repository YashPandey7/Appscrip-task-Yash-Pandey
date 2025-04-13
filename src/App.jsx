import React, { useEffect, useState } from 'react'
import Products from './Products';
import axios from 'axios';
import Navbar from './Navbar';
import PageTitle from './PageTitle';

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

        {data.map((item) => <Products key={item.id} item={item}/>)}
      </div>
    </>
  )
}

export default App;