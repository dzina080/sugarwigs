const Stripe = require("stripe");

// Secret key is loaded from Netlify environment variable
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event, context) => {
  try {
    // Parse request body from frontend
    const { cart } = JSON.parse(event.body);

    if (!cart || cart.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Cart is empty" }),
      };
    }

    // Convert cart to Stripe line items
    const line_items = cart.map((item) => ({
      price_data: {
        currency: "cad",
        unit_amount: Math.round(item.price * 100),
        product_data: { name: item.title },
      },
      quantity: item.quantity || 1,
      
    }));

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      payment_method_types: ["card", "afterpay_clearpay", "klarna"],

      customer_creation: "always",

      shipping_address_collection: {
        allowed_countries: [
          "US", "CA", "AL", "AD", "AT", "BY", "BE", "BA", "BG", "HR", "CY", "CZ", "DK", "EE",
          "FI", "FR", "DE", "GI", "GR", "HU", "IS", "IE", "IT", "LV", "LI", "LT",
          "LU", "MT", "MD", "MC", "ME", "NL", "MK", "NO", "PL", "PT", "RO", "RU",
          "SM", "RS", "SK", "SI", "ES", "SE", "CH", "UA", "GB", "VA"
        ],
      },

      shipping_options: [
        {
          shipping_rate_data: {
            display_name: "Standard Shipping",
            type: "fixed_amount",
            fixed_amount: { amount: 1500, currency: "cad" },
          },
        },
      ],

      line_items,

      success_url: "https://sugarwigs.netlify.app/success",
      cancel_url: "https://sugarwigs.netlify.app/",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
