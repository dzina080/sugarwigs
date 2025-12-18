import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logok from "../src/logo.jpg";
import { useTranslation } from "react-i18next";

// Icons
import { FiSearch, FiMenu, FiGlobe } from "react-icons/fi";
import { HiOutlineHome, HiOutlineShoppingCart } from "react-icons/hi2";

const Nav = ({ onSearch, cartCount, resetSearch }) => {
  const { t, i18n } = useTranslation();

  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const inputRef = useRef(null);

  const location = useLocation();
  const prevPath = useRef(location.pathname); // <-- added

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "fr" ? "en" : "fr");
  };

  // Focus input when search opens
  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  // Reset search ONLY when route changes
  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      setQuery("");
      setShowSearch(false);
      if (onSearch) onSearch("");
      prevPath.current = location.pathname;
    }
  }, [location.pathname, onSearch]);

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
      {/* LEFT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Hamburger */}
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
              <h4 style={{ marginBottom: "8px" }}>{t("contact")}</h4>
              <p>Email: sugarluxurywigs@gmail.com</p>
            </div>
          )}
        </div>

        {/* Home */}
        <Link to="/">
          <HiOutlineHome
            style={{
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </Link>
      </div>

      {/* LOGO */}
      <img
        src={logok}
        alt="Logo"
        style={{
          maxWidth: "60px",
          maxHeight: "60px",
          borderRadius: "8px",
          marginLeft: "50px",
        }}
      />

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        {/* Search */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <FiSearch style={{ color: "white", fontSize: "24px" }} />
          </button>

          {showSearch && (
            <form
              onSubmit={handleSearch}
              style={{
                position: "absolute",
                right: 0,
                top: "110%",
                display: "flex",
                alignItems: "center",
                background: "#111",
                padding: "4px 6px",
                borderRadius: "6px",
              }}
            >
              <input
                ref={inputRef}
                type="text"
                placeholder={t("search")}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (onSearch) onSearch(e.target.value);
                }}
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  color: "white",
                }}
              />
              {query && (
                <span
                  onClick={clearSearch}
                  style={{ cursor: "pointer", color: "white" }}
                >
                  ×
                </span>
              )}
            </form>
          )}
        </div>

        {/* Language */}
        <button
          onClick={toggleLanguage}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <FiGlobe style={{ color: "white", fontSize: "22px" }} />
        </button>

        {/* Cart */}
        <Link to="/cart">
          <HiOutlineShoppingCart
            style={{
              color: "gold",
              fontSize: "28px",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;





