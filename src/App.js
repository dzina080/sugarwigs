// App.js
import { FaTiktok, FaSnapchatGhost, FaInstagram, FaFacebookF } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Expandable from './Expandable';
import Cart from './Cart';
import Checkout from './Checkout';
import Success from './success';
import ProductDetails from './ProductDetails';
import { useTranslation } from "react-i18next";



// ✅ Banner images
import banner1 from '../src/image (28).jpeg';
import banner2 from '../src/image (44).jpeg';
import banner3 from '../src/image (40).jpeg';

// ✅ Product images
import item1 from '../src/image (36).jpeg';
import item1_2 from '../src/image (5).jpeg';
import item1_3 from '../src/image (18).jpeg';
import item1_4 from '../src/image (20).jpeg';
import item1_5 from '../src/image (30).jpeg';
import item1_6 from '../src/image (4).jpeg';
import item1_7 from '../src/image (38).jpeg';
import item1_8 from '../src/image (42).jpeg';
import item1_9 from '../src/image (43).jpeg';
import item1_10 from '../src/image (50).jpeg';
import item1_11 from '../src/image (54).jpeg';
import item1_12 from '../src/image (56).jpeg';
import item2_1 from '../src/image (3).jpeg';
import item2_2 from '../src/image (15).jpeg';
import item2_3 from '../src/image (16).jpeg';
import item2_4 from '../src/image (51).jpeg';
import item3_6 from '../src/image (13).jpeg';
import item3_2 from '../src/image (24).jpeg';
import item3_3 from '../src/image (26).jpeg';
import item3_4 from '../src/image (45).jpeg';
import item3_1 from '../src/image (49).jpeg';
import item3_5 from '../src/image (63).jpeg';
import item4_3 from '../src/image (9).jpeg';
import item4_2 from '../src/image (10).jpeg';
import item4_1 from '../src/image (53).jpeg';
import item4_4 from '../src/image (25).jpeg';
import item5_1 from '../src/image (11).jpeg';
import item5_2 from '../src/image (27).jpeg';
import item5_3 from '../src/image (39).jpeg';
import item5_4 from '../src/image (52).jpeg';
import item5_5 from '../src/image (58).jpeg';
import item6_5 from '../src/image (14).jpeg';
import item6_2 from '../src/image (21).jpeg';
import item6_3 from '../src/image (32).jpeg';
import item6_4 from '../src/image (34).jpeg';
import item6_1 from '../src/image (48).jpeg';
import item6_6 from '../src/image (61).jpeg';
import item7_5 from '../src/image (35).jpeg';
import item7_2 from '../src/image (41).jpeg';
import item7_3 from '../src/image (47).jpeg';
import item7_4 from '../src/image (55).jpeg';
import item7_1 from '../src/image (57).jpeg';
import item7_6 from '../src/image (62).jpeg';
import item8_3 from '../src/images (1).jpg';
import item8_2 from '../src/images (2).jpg';
import item8_1 from '../src/images (3).jpg';
import item8_4 from '../src/images (4).jpg';
import item8_5 from '../src/images (5).jpg';
import item8_6 from '../src/images (6).jpeg';
import item9_3 from '../src/img (1).jpg';
import item9_2 from '../src/img (2).jpg';
import item9_1 from '../src/img (3).jpg';
import item10_1 from '../src/img.jpg';
import item10_2 from '../src/img (1).jpeg';

// 🎥 Spotlight videos
import video1 from '../src/vid (1).mp4';
import video2 from '../src/vid (2).mp4';
import video3 from '../src/vid (3).mp4';
import video4 from '../src/vid (4).mp4';
import video5 from '../src/vid (5).mp4';
import video6 from '../src/vid (6).mp4';
import video7 from '../src/vid (7).mp4';
import itemvid1 from '../src/item1vid.mp4';
import itemvid4 from '../src/item4vid.mp4';
import itemvid5 from '../src/item5vid.mp4';
import itemvid6 from '../src/item6vid.mp4';
import itemvid7 from '../src/item7vid.mp4';

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [currentBanner, setCurrentBanner] = useState(0);
  const { t } = useTranslation();

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const items = [
    { title: 'Sugar undetectable HD Lace Body Wave Human Hair Wigs 13*4 Lace Front wigs', images: [item1, item1_2, item1_3, item1_4, item1_5, item1_6, item1_7, item1_8, item1_9, item1_10, item1_11, item1_12, { type: 'video', url: itemvid1,poster: item1}], description: '', prices: [318.99, 385.99, 435.99], sizes: ["26 inch", "28 inch", "30 inch"] },
    { title: 'Sugar Bob wig pre-cut Lace invisiFit Strap orange wig', images: [item2_1, item2_2, item2_3, item2_4], description: '', prices: [150.99, 170.99, 200.99], sizes: ["10 inch", "12 inch", "14 inch"] },
    { title: 'Sugar 13*4 Deep wave wig HD Lace Front wig with invisi Draw-strings', images: [item3_1, item3_2, item3_3, item3_4, item3_5, item3_6], description: '', prices: [320.99, 380.99, 445.99], sizes: ["26 inch", "28 inch", "30 inch"] },
    { title: 'Sugar classic straight wig 13*4 HD Lace virgin Hair undetectable Lace', images: [item4_1, item4_2, item4_3, item4_4,{ type: 'video', url: itemvid4,poster: item4_1 }], description: '', prices: [300.99, 355.99, 660.99], sizes: ["28 inch", "30 inch", "40 inch"] },
    { title: 'Sugar Brown straight 13*4 HD Lace Natural Hair Liner 100% Human Virgin Hair wigs', images: [item5_1, item5_2, item5_3, item5_4, item5_5,{ type: 'video', url: itemvid5,poster:item5_1 }], description: '', prices: [330, 375, 675], sizes: ["28 inch", "30 inch", "40 inch"] },
    { title: 'Sugar Brown Deep curly HD Lace wig 13*4 Human Hair wigs', images: [item6_1, item6_2, item6_3, item6_4, item6_5, item6_6,{ type: 'video', url: itemvid6,poster:item6_1 }], description: '', prices: [318.99, 385.99, 435.99], sizes: ["26 inch", "28 inch", "30 inch"] },
    { title: 'Sugar Jerry curly Brown 13*4 HD Lace Front wig with Natural Hairline', images: [item7_1, item7_2, item7_3, item7_4, item7_5, item7_6,{ type: 'video', url: itemvid7,poster:item7_1 }], description: '', prices: [370.99, 445.99, 685.99], sizes: ["28 inch", "30 inch", "40 inch"] },
    { title: 'Sugar Blonde color Bob straight Hair Lace Wigs 13*4 HD Lace', images: [item8_1, item8_2, item8_3, item8_4, item8_5, item8_6], description: '', prices: [150.99, 170.99, 200.99], sizes: ["10 inch", "12 inch", "14 inch"] },
    { title: 'Sugar Bob wig pre-cut Lace invisiFit Strap Brown wig', images: [item9_1, item9_2, item9_3], description: '', prices: [140.99, 160.99, 180.99], sizes: ["10 inch", "12 inch", "14 inch"] },
    { title: 'Sugar classic Black Bob straight 13*4 HD Lace wig', images: [item10_1, item10_2], description: '', prices: [130.99, 145.99, 165.99], sizes: ["10 inch", "12 inch", "14 inch"] }
  ];

  // ✅ Search filter state
  const [filteredItems, setFilteredItems] = useState(items);

  const banners = [banner1, banner2, banner3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* ✅ Pass items + search handler into Nav */}
        <Nav
  cartCount={cart.length}
  onSearch={(query) => {
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredItems(filtered);
  }}
/>


        <div style={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  {/* Two banners side by side */}
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      marginBottom: '20px',
                      gap: '0px',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={banners[currentBanner]}
                      alt="Banner 1"
                      style={{
                        flex: '1 1 50%',
                        maxHeight: '500px',
                        width: '50%',
                        objectFit: 'cover',
                        borderRadius: '8px 0 0 8px',
                        transition: 'opacity 0.8s ease-in-out',
                      }}
                    />
                    <img
                      src={banners[(currentBanner + 1) % banners.length]}
                      alt="Banner 2"
                      style={{
                        flex: '1 1 50%',
                        maxHeight: '500px',
                        width: '50%',
                        objectFit: 'cover',
                        borderRadius: '0 8px 8px 0',
                        transition: 'opacity 0.8s ease-in-out',
                      }}
                    />
                  </div>

                  {/* Intro */}
                  <div className="intro-text">
                    <h3>{t("def")}</h3>
                  </div>

                  {/* Best Seller */}
                  <div style={{ textAlign: 'center', margin: '30px 0' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>
                      {t("bestSeller")}
                    </h2>
                  </div>

                  {/* ✅ Products filtered by search */}
                  <Expandable items={filteredItems.map((item) => ({ ...item, image: item.images[0] }))} addToCart={addToCart} />

                  {/* Spotlight */}
                  <div style={{ textAlign: 'center', margin: '30px 0' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#fff', letterSpacing: '2px', textTransform: 'uppercase' }}>
                      {t("spotlight")}
                    </h2>
                  </div>

                  {/* ✅ Fixed Grid for 3x2 layout */}
                  <div
                    className="spotlight-grid"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '20px',
                      maxWidth: '1200px',
                      margin: '30px auto',
                      padding: '0 10px',
                    }}
                  >
                    {[video7,video1, video2, video3, video4, video5, video6].map((src, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: '#111',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                        }}
                      >
                        <video
  controls
  preload="metadata" // preload metadata to show first frame without downloading full video
  muted
  autoPlay
  playsInline
  style={{
    width: '100%',
    objectFit: 'cover',
    display: 'block',
  }}
>
  <source src={src} type="video/mp4" />
  Your browser does not support the video tag.
</video>
                      </div>
                    ))}
                  </div>
                  {/* Best Seller */}
                  <div style={{ textAlign: 'center', margin: '30px 0' }}>

                   

<div style={{ textAlign: 'center', margin: '20px 5px' }}>
  {/* Newsletter Subscription */}
  <div style={{ marginTop: '20px' }}>
    <h3 style={{ color: '#fff', marginBottom: '10px',justifyContent:'center' }}>{t("subscribe")}</h3>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Subscribed!'); // Replace with actual subscription logic
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        flexWrap: 'wrap',
      }}
    >
      <input
        type="email"
        placeholder="Enter your email"
        required
        style={{
          padding: '8px 12px',
          borderRadius: '6px',
          border: '1px solid #ccc',
          minWidth: '200px',
          flex: '1',
          maxWidth: '300px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '8px 16px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: 'gold',
          color: '#000',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        {t("subscribebutton")}
      </button>
    </form>
  </div>
  {/* Social Media Grid */}
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
      gap: '20px',
      maxWidth: '400px',
      margin: '0 auto 40px',
      justifyItems: 'center',
      alignItems: 'center',
      marginTop:'20px'
    }}
  >
    <a href="https://www.tiktok.com/@sugarwigsbyriken?_t=ZN-908xS5jJl90&_r=1" target="_blank" rel="noopener noreferrer">
      <FaTiktok style={{ fontSize: '40px', cursor: 'pointer', color: 'white' }} />
    </a>
    <a href="https://snapchat.com/t/SZsMmcaU" target="_blank" rel="noopener noreferrer">
      <FaSnapchatGhost style={{ fontSize: '40px', cursor: 'pointer', color: '#FFFC00' }} />
    </a>
    <a href="https://www.instagram.com/suga.rwigs?igsh=MXJ1bzhpMm53cmJzOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">
      <FaInstagram style={{ fontSize: '40px', cursor: 'pointer', color: '#C13584' }} />
    </a>
    <a href="https://www.facebook.com/ownerProfile" target="_blank" rel="noopener noreferrer">
      <FaFacebookF style={{ fontSize: '40px', cursor: 'pointer', color: '#1877F2' }} />
    </a>
  </div>

  
</div>

                  </div>
                </div>
                
              }
            />

            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
            <Route path="/product/:title" element={<ProductDetails items={items} addToCart={addToCart} />} />
            
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: '#000',
            color: 'white',
            textAlign: 'center',
            padding: '15px 0',
            fontSize: '14px',
            borderTop: '1px solid #444',
            fontWeight: 'bold',
          }}
        >
          ©{new Date().getFullYear()} SugarWigs
        </footer>
      </div>
    </Router>
  );
}

export default App;








