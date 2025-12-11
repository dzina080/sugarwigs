import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logok from "../src/logo.jpg";

// Icons
import { FiSearch, FiMenu } from "react-icons/fi";
import { HiOutlineHome, HiOutlineShoppingCart } from "react-icons/hi2";

const Nav = ({ onSearch, cartCount, resetSearch }) => {
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const inputRef = useRef(null);

  const location = useLocation();

  // Focus input when search opens
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch], [onSearch]); ;

  // Reset search when route changes (like ProductDetails -> Home)
  useEffect(() => {
    setQuery("");
    setShowSearch(false);
    if (onSearch) onSearch("");
  }, [location.pathname], [onSearch]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query);
  };

  const clearSearch = () => {
    setQuery("");
    if (onSearch) onSearch("");
    inputRef.current.focus();
  };

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 20px",
        backgroundColor: "#000",
        position: "relative",
      }}
    >
      {/* LEFT SIDE: Hamburger Dropdown + Home */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Hamburger Dropdown */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowContact((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <FiMenu style={{ color: "white", fontSize: "28px" }} />
          </button>
          {showContact && (
            <div
              style={{
                position: "absolute",
                top: "110%",
                left: 0,
                background: "#111",
                color: "#fff",
                padding: "12px",
                borderRadius: "6px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
                zIndex: 10,
                minWidth: "220px",
              }}
            >
              <h4 style={{ marginBottom: "8px" }}>Contact Info</h4>
              <p>Email: sugarluxurywigs@gmail.com</p>
              
            </div>
          )}
        </div>

        {/* Home Button */}
        <Link to="/">
          <HiOutlineHome
            style={{
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Link>
      </div>

      {/* CENTER: Logo */}
      <img
        src={logok}
        alt="Logo"
        style={{
          maxWidth: "60px",
          maxHeight: "60px",
          borderRadius: "8px",
          margin: "0 auto",
        }}
      />

      {/* RIGHT SIDE: Search + Cart */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Search Button */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
            }}
          >
            <FiSearch style={{ color: "white", fontSize: "24px" }} />
          </button>

          {showSearch && (
            <form
              onSubmit={handleSearch}
              style={{
                position: "absolute",
                right: "0",
                top: "110%",
                display: "flex",
                alignItems: "center",
                background: "#111",
                padding: "4px 6px",
                borderRadius: "6px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.5)",
                minWidth: "150px",
                maxWidth: "250px",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => {
                  const value = e.target.value;
                  setQuery(value);
                  if (onSearch) onSearch(value);
                }}
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "white",
                  padding: "4px 6px",
                  fontSize: "14px",
                }}
              />
              {query && (
                <span
                  onClick={clearSearch}
                  style={{
                    cursor: "pointer",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginLeft: "4px",
                  }}
                >
                  ×
                </span>
              )}
            </form>
          )}
        </div>

        {/* Cart Button */}
        <Link to="/cart">
          <HiOutlineShoppingCart
            style={{
              color: "gold",
              fontSize: "28px",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;



