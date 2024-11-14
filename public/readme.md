
/* contact Form Styles */
.contact-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.contact-form {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.5rem;
  border: 2px solid #27423a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  /* margin: 6rem auto; */
  
}
.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  border-bottom: 2px solid #27423a;
  color: #27423a;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom: 2px solid transparent;
}
.contact-form textarea {
  resize: vertical;
}
/* Payment Method Section */
.payment-method {
  margin-top: 1rem;
}

.payment-method label {
  font-size: 1.125rem;
  color: #27423a;
}

.payment-method .radio-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.payment-method input[type="radio"] {
  margin-right: 0.5rem;
}
/* Submit Button */
.submit-button {
  background-color: #27423a;
  color: white;
  padding: 1rem 2rem;
  width: 100%;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  cursor: pointer;
  text-align: center;
  margin-top: 1rem;
}

.submit-button:hover {
  background-color: #365e50;
}
/* Showroom Information Section */
.showroom-info {
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  border: 2px solid #27423a;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 2rem;
}

.showroom-info h2 {
  background-color: #27423a;
  color: white;
  text-align: center;
  padding: 1rem;
  border-radius: 0.5rem;
}

.showroom-info p {
  color: #27423a;
  margin-bottom: 0.5rem;
}

.showroom-info a {
  color: #27423a;
  text-decoration: underline;
}

.showroom-info a:hover {
  color: #365e50;
}
/* For Tablets */
@media (max-width: 768px) {
  .container {
    padding: 1.5rem;
  }

  .contact-form {
    padding: 1rem;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 0.5rem;
  }

  .payment-method .radio-group {
    flex-direction: column;
    gap: 0.5rem;
  }

  .submit-button {
    padding: 0.75rem 1.5rem;
  }

  .showroom-info h2 {
    font-size: 1.5rem;
  }

  .showroom-info p {
    font-size: 1rem;
  }
}

/* For Mobile Devices */
@media (max-width: 360px) {
  .contact-container {
    padding: 1rem;
  }

  .contact-form {
    padding: 0.75rem;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 0.4rem;
  }

  .submit-btn {
    padding: 0.75rem;
  }

  .showroom-info h2 {
    font-size: 1.25rem;
  }

  .showroom-info p {
    font-size: 0.9rem;
  }
}
