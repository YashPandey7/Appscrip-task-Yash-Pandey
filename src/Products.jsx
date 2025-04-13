// import React from 'react'

// const Products = ({item}) => {
//   return (
//     <>
//         <div>
//             <img src={item?.image} alt="product image"/>
//             <h3>{item?.title}</h3>
//             <p>Sign in or Create an account to see pricing</p>
//         </div>
//     </>
//   )
// }

// export default Products

import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Make sure to install react-icons

const Products = ({ item }) => {
  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      padding: '16px',
      position: 'relative',
      width: '250px',
      fontFamily: 'Simplon Norm, sans-serif',
    }}>
      <img 
        src={item?.image} 
        alt="product" 
        style={{ width: '100%', objectFit: 'cover' }} 
      />
      <h3 style={{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: '14px',
        margin: '12px 0 6px',
      }}>
        {item?.title}
      </h3>
      <p style={{ fontSize: '12px', color: '#7a7a7a' }}>
        <span style={{ color: '#0071e3', cursor: 'pointer' }}>Sign in</span> or Create an account to see pricing
      </p>
      <FaHeart 
        style={{ 
          color: '#e91e63', 
          position: 'absolute', 
          bottom: '16px', 
          right: '16px', 
          cursor: 'pointer' 
        }} 
      />
    </div>
  );
};

export default Products;
