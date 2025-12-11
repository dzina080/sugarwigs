// ProductDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './App.css';

const ProductDetails = ({ items, addToCart }) => {
  const { title } = useParams();
  const navigate = useNavigate();
  const product = items.find((item) => item.title === title);

  const [mainMedia, setMainMedia] = useState(product?.images[0] || '');
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <p style={{ color: 'white', textAlign: 'center' }}>Product not found</p>;
  }

  const isVideo = (media) => typeof media === 'object' && media.type === 'video';

  return (
    <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#000', color: 'white' }}>
      {/* Main media display */}
      <div style={{ marginBottom: '20px' }}>
        {isVideo(mainMedia) ? (
          <video
            src={mainMedia.url}
            controls
            disablePictureInPicture
            autoPlay
            style={{
              width: '80%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'contain',
            }}
          />
        ) : (
          <img
            src={mainMedia}
            alt={product.title}
            style={{
              width: '80%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '12px',
              objectFit: 'contain',
            }}
          />
        )}
      </div>

      <p
        style={{
          fontSize: '22px',
          fontWeight: 'bold',
          color: '#bcbcbcff',
          textTransform: 'uppercase',
        }}
      >
        {product.title}
      </p>

      <p
        style={{
          fontSize: '22px',
          fontWeight: 'bold',
          color: 'rgb(218, 165, 32)',
        }}
      >
        ${product.prices[selectedSizeIndex]}
      </p>

      {/* Thumbnails */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '30px',
        }}
      >
        {product.images.map((media, index) => (
          <div key={index} style={{ position: 'relative' }}>
            {isVideo(media) ? (
              <video
                src={media.url}
                poster={media.poster || ''}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  border: mainMedia === media ? '3px solid rgb(237,101,164)' : '2px solid #555',
                }}
                onClick={() => setMainMedia(media)}
              />
            ) : (
              <img
                src={media}
                alt={`${product.title} ${index + 1}`}
                style={{
                  width: '60px',
                  height: '60px',
                  objectFit: 'cover',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  border: mainMedia === media ? '3px solid rgb(237,101,164)' : '2px solid #555',
                  transition: 'transform 0.3s, border 0.3s',
                }}
                onClick={() => setMainMedia(media)}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            )}

            {isVideo(media) && (
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  fontSize: '16px',
                  pointerEvents: 'none',
                }}
              >
                ▶
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Size Selector */}
      {product.sizes && product.sizes.length > 0 && (
        <div style={{ marginBottom: '25px' }}>
          <label style={{ fontSize: '18px', marginRight: '10px', fontWeight: 'bold' }}>Taille :</label>
          <select
            value={selectedSizeIndex}
            onChange={(e) => setSelectedSizeIndex(Number(e.target.value))}
            style={{
              padding: '8px 12px',
              borderRadius: '6px',
              border: '1px solid #555',
              fontSize: '16px',
              background: '#111',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {product.sizes.map((size, index) => (
              <option key={size} value={index}>
                {size}
              </option>
            ))}
          </select>
        </div>
      )}

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
  🚚 Livraison & Retours
</h3>

<p style={{ marginBottom: '15px', fontSize: '16px' }}>
  ⏳ Livraison standard en <strong>5 à 7 jours ouvrables</strong> après la confirmation de votre commande.
</p>
<p style={{ fontSize: '16px' }}>
  🔄 Si vous n'êtes pas entièrement satisfait, vous pouvez demander un retour ou un remboursement dans un délai de <strong>30 jours</strong> après la livraison.
</p>

      </div>

      <p style={{ fontSize: '18px', marginTop: '20px' }}>{product.description}</p>

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
          onClick={() => {
            addToCart({
              ...product,
              selectedSize: product.sizes[selectedSizeIndex],
              price: product.prices[selectedSizeIndex],
            });
            navigate('/cart');
          }}
        >
          Ajouter au panier
        </button>

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
          onClick={() => navigate(-1)}
        >
          Retour
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;










