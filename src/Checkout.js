import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51SYist4jmY3lwMWMRW2jZAZE6kdNrIn0JFJ6ALlX5IJjkpAEKsImNlk6o1JJBEvkKGCybUbhnAKt3rbTogNEMkPD003oftneoz");

const Checkout = ({ cart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Call your backend to create a Stripe session
    const res = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        line_items: cart.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: 1,
        })),
        success_url: 'https://sugarwigs.netlify.app/success',
        cancel_url:  'https://sugarwigs.netlify.app/',
      }),
    });

    const data = await res.json();

    // Redirect to Stripe Checkout
    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    });

    if (result.error) {
      alert(result.error.message);
    }
  };

  if (cart.length === 0) {
    return (
      <p style={{ textAlign: "center", marginTop: "40px", color: "white" }}>
        Your cart is empty. Please add items before checking out.
      </p>
    );
  }

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "40px auto",
        padding: "30px",
        borderRadius: "12px",
        backgroundColor: "#000",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Checkout</h2>
      <p
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          marginBottom: "30px",
        }}
      >
        Total: ${totalPrice.toFixed(2)}
      </p>

      <button
        onClick={handleCheckout}
        style={{
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "2px solid white",
          backgroundColor: "black",
          color: "white",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = "black";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = "black";
          e.target.style.color = "white";
        }}
      >
        Confirmer et Payer
      </button>
    </div>
  );
};

export default Checkout;

