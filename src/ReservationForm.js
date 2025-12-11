import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ReservationForm = () => {
  const [name, setName] = useState('');
  const [Instagram, setInstagram] = useState('');
  const [Hairstyle, setHairstyle] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      Instagram,
      Hairstyle,
      message,
    };

    emailjs.send(
      'service_vnkp7in', // replace with your EmailJS service ID
      'template_ktgzj4i', // replace with your EmailJS template ID
      templateParams,
      'HtFYuzNDpkdR5DbVT' // replace with your EmailJS user ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      // Clear form
      setName('');
      setInstagram('');
      setHairstyle('');
      setMessage('');
    }, (err) => {
      console.log('FAILED...', err);
    });
  };

  return (
    <div className="form-container">
      {submitted ? (
        <p>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="reservation-form">
          <div>
            <label htmlFor="nom">Name:</label>
            <input
              type="text"
              id="nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Instagram">Instagram:</label>
            <input
              type="text"
              id="Instagram"
              value={Instagram}
              onChange={(e) => setInstagram(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="Hairstyle">Hairstyle:</label>
            <input
              type="Hairstyle"
              id="Hairstyle"
              value={Hairstyle}
              onChange={(e) => setHairstyle(e.target.value)}
              required
            />
          </div>
          
          
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ReservationForm;

