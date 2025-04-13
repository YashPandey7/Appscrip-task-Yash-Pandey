import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa';

const Products = ({ item }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prev => !prev);
  };

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '4px',
      overflow: 'hidden',
      width: '250px',
      height: '400px',
      fontFamily: 'Simplon Norm, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      
      {/* Image Container */}
      <div style={{
        height: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img 
          src={item?.image} 
          alt="product"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
        />
      </div>

      {/* Text and Icon */}
      <div style={{
        padding: '16px',
        position: 'relative',
      }}> 
        <h3 style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          fontSize: '14px',
          margin: '12px 0 6px',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}>
          {item?.title}
        </h3>
        <p style={{ fontSize: '12px', color: '#7a7a7a', marginBottom: '20px' }}>
          <span style={{ color: '#0071e3', cursor: 'pointer' }}>Sign in</span> or Create an account to see pricing
        </p>

        <FaHeart 
          onClick={toggleLike}
          style={{
            color: liked ? '#e91e63' : '#ccc',
            position: 'absolute',
            bottom: '16px',
            right: '16px',
            cursor: 'pointer',
            transition: 'color 0.3s ease'
          }}
        />
      </div>
    </div>
  );
};

export default Products;
