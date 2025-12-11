import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    if (cart.length === 0) return alert("Your cart is empty");

    try {
      // Only send necessary data to server for Stripe
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
        console.error("Stripe session URL missing:", data);
        alert("Failed to create checkout session.");
        return;
      }

      // Redirect to Stripe-hosted checkout page
      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Checkout failed. See console for details.");
    }
  };

  return (
    <div style={{ padding: "20px", color: "white", backgroundColor: "#000" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
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
                  paddingBottom: "10px",
                }}
              >
                {/* ✅ Image only shown in cart */}
                <img
                  src={item.images[0]}
                  alt={item.title}
                  style={{ width: "80px", marginRight: "15px", borderRadius: "5px" }}
                />
                <div style={{ flex: 1 }}>
                  <strong>{item.title}</strong> - <span>${item.price}</span>
                </div>
                <button
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "transparent",
                    color: "white",
                    border: "2px solid white",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
          <button
            style={{
              padding: "12px 30px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              border: "2px solid white",
              backgroundColor: "black",
              color: "white",
              cursor: "pointer",
            }}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;





