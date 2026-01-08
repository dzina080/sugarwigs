import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
        
      translation: {
        subscribebutton:"subscribe",
        size:"Size",
        def: "SugarWigs is a brand specialized in high-quality wigs and hair extensions, offered at affordable prices.\n We take pride in providing 100% Virgin Hair products to ensure a natural, soft, and long-lasting look.\n\nWe also offer an exclusive selection of Raw Hair (untreated hair) from various origins recognized for their excellence such as:\n • Vietnamese Hair: renowned for its strength and smooth texture.\n • Brazilian Hair: known for its volume, flexibility, and versatility.\n\nWith SugarWigs, premium beauty products are within everyone’s reach.",
        search: "Search...",
        bestSeller: "Best Seller",
        spotlight: "Spotlight",
        subscribe: "Subscribe",
        emailPlaceholder: "Enter your email",
        cart: "Your Cart",
        checkout: "Checkout",
        total: "Total",
        emptyCart: "Your cart is empty.",
        addToCart: "Add to cart",
        back: "Back",
        home: "Home",
        contact: "Contact Info",
        orderSuccess:
          "Your order was proccessed successfully. A confirmation email will been sent soon.",
        shippingTitle: "Shipping & Returns",
        shippingText:
          "Standard delivery in 5–7 business days after order confirmation.",
        returnText:
          "You may request a return or refund within 30 days after delivery.",
      },
    },
    fr: {
      translation: {
        subscribebutton:"s'abonner",
        size:"Taille",
        def: "SugarWigs est une marque spécialisée dans les perruques et extensions de cheveux de très haute qualité, accessibles à petits prix.\n\n Nous mettons un point d’honneur à proposer des produits 100 % Virgin Hair pour garantir un rendu naturel, doux et durable.\n Nous offrons également une sélection exclusive de Raw Hair (cheveux bruts non traités), de différentes origines reconnues pour leur excellence comme :\n\n • les Cheveux vietnamiens : réputés pour leur résistance et leur texture lisse. \n • les Cheveux brésiliens : connus pour leur volume, leur souplesse et leur polyvalence. \n\n Avec Sugar Wigs, la beauté haut de gamme est à la portée de tous.",
        search: "Rechercher...",
        bestSeller: "Meilleures ventes",
        spotlight: "À la une",
        subscribe: "Abonnez vous",
        emailPlaceholder: "Entrez votre email",
        cart: "Votre panier",
        checkout: "Paiement",
        total: "Total",
        emptyCart: "Votre panier est vide.",
        addToCart: "Ajouter au panier",
        back: "Retour",
        home: "Accueil",
        contact: "Contact",
        orderSuccess:
          "Votre commande a été passée avec succès. Vous recevrez bientôt Un courriel de confirmation .",
        shippingTitle: "Livraison & retours",
        shippingText:
          "Livraison standard en 5 à 7 jours ouvrables après confirmation de la commande.",
        returnText:
          "Retour ou remboursement possible sous 30 jours après livraison.",
      },
    },
  },
  lng: "fr", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;

