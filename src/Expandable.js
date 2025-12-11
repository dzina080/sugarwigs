import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Expandable = ({ items }) => {
  return (
    <div className="gallery">
      {items.map((item) => (
        <div key={item.title} className="card">
          <Link to={`/product/${encodeURIComponent(item.title)}`}>
            <img
              src={item.image}
              alt={item.title}
              style={{
                cursor: 'pointer',
                borderRadius: '8px',
                maxWidth: '100%',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </Link>
          <h4>
            <Link
              to={`/product/${encodeURIComponent(item.title)}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              {item.title}
            </Link>
          </h4>
          <p>{item.prices[0] + '$'}</p> {/* 👈 show only the first price */}
        </div>
      ))}
    </div>
  );
};

export default Expandable;




