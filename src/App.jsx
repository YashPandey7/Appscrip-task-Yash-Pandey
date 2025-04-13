
import React, { useEffect, useState } from 'react';
import Products from './Products';
import axios from 'axios';
import Navbar from './Navbar';
import PageTitle from './PageTitle';
import Filter from './Filter';
import Recommendation from './Recommendation';
import Footer from './Footer';

const App = () => {
  const [data, setData] = useState([]);
  const [showFilter, setShowFilter] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setData(res.data);
      } catch (err) {
        console.log("Error While fetching the data: ", err.message);
      }
    };
    fetchData();

    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="container">
        <Navbar />
        <PageTitle />

        {isMobile && (
          <div className="mobile-toggle-buttons">
            <button onClick={() => setShowFilter(prev => !prev)}>
              {showFilter ? "Hide Filter" : "Show Filter"}
            </button>
            <button>Recommendation</button>
          </div>
        )}
        {!isMobile && (
          <Recommendation show={showFilter} setShow={setShowFilter}/>
        )}

        <div className={`main-content ${showFilter ? 'filter-visible' : ''}`}>
          {showFilter && !isMobile && (
            <div className="filter-section">
              <Filter />
            </div>
          )}

          <div className="product-container">
            {data.map((item) => (
              <Products key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
