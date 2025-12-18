import React from "react";
import { useTranslation } from "react-i18next";

const Cart = ({ cart, removeFromCart }) => {
  const { t } = useTranslation();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return alert(t("emptyCart"));

    try {
      const lineItems = cart.map(item => ({
        title: item.title,
        price: item.price,
        quantity: 1,
      }));

      const res = await fetch("/.netlify/functions/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: lineItems }),
      });

      const data = await res.json();

      if (!data.url) {
        alert("Checkout failed.");
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Checkout failed.");
    }
  };

  return (
    <div style={{ padding: "20px", color: "white", backgroundColor: "#000" }}>
      <h2>{t("cart")}</h2>

      {cart.length === 0 ? (
        <p>{t("emptyCart")}</p>
      ) : (
        <>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {cart.map((item, index) => (
              <li
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "15px",
                  borderBottom: "1px solid #555",
                }}
              >
                <img
                  src={item.images[0]}
                  alt={item.title}
                  style={{ width: "80px", marginRight: "15px" }}
                />
                <div style={{ flex: 1 }}>
                  <strong>{item.title}</strong> – ${item.price}
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  style={{
                    background: "transparent",
                    color: "white",
                    border: "2px solid white",
                    cursor: "pointer",
                    fontWeight:"bold"
                  }}
                >
                  {t("remove")}
                </button>
              </li>
            ))}
          </ul>

          <h3>
            {t("total")}: ${totalPrice.toFixed(2)}
          </h3>

          <button
            onClick={handleCheckout}
            style={{
              padding: "12px 30px",
              border: "2px solid white",
              background: "black",
              color: "white",
              cursor: "pointer",
              fontWeight:"bold"
            }}
          >
            {t("checkout")}
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;






