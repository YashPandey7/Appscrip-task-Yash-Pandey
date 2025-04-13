import React, { useEffect, useState } from 'react'
import Products from './Products';
import axios from 'axios';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import Filter from './Filter';
import Recommendation from './Recommendation';
import Footer from './Footer';

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
        
        <Recommendation/>
        <div className="main-content">
          <div className="filter-section">
            <Filter />
          </div>
          <div className="product-container">
            {data.map((item) => <Products key={item.id} item={item} />)}
          </div>
        </div>

      </div>
      <Footer/>
    </>
  )
}

export default App;