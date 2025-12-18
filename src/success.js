

import { useNavigate } from 'react-router-dom';
import './App.css';
import { useTranslation } from "react-i18next";
const Success = ({ items, addToCart }) => {
const { t } = useTranslation();
const navigate = useNavigate();
const handleGoHome = () => {
        navigate('/');}


  return (
    <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#000', color: 'white' }}>
      

      {/* Shipping & Returns */}
      <div
        style={{
          margin: '20px auto',
          padding: '20px',
          maxWidth: '650px',
          background: '#111',
          borderRadius: '12px',
          textAlign: 'left',
          color: '#f1f1f1',
          lineHeight: '1.6',
        }}
      >
        <h3 style={{ color: 'white', marginBottom: '15px', textAlign: 'center' }}>
          {t("orderSuccess")}
        </h3>
        
       
      </div>

      

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '20px',
          flexWrap: 'wrap',
        }}
      >

        

        <button
          style={{
            padding: '10px 20px',
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '16px',
            transition: 'all 0.3s ease',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';
          }}
          onClick={handleGoHome}
        >
          Accueil
        </button>
      </div>
    </div>
  );
};

export default Success;