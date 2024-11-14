// /src/app/contact/page.tsx
'use client';

export default function ContactUs() {
  // const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <form className="contact-form">
        {/* Name Field */}
        <input
          type="text"
          placeholder="Your Name"
          className="input-field"
        />

        {/* Email Field */}
        <input
          type="email"
          placeholder="Your Email"
          className="input-field"
        />

        {/* Contact Number Field */}
        <input
          type="text"
          placeholder="Your Contact Number"
          className="input-field"
        />

        {/* Message Field */}
        <textarea
          placeholder="Your Message"
          rows={4}
          className="input-field"
        ></textarea>

        {/* Address Field */}
        <textarea
          placeholder="Your Address"
          rows={3}
          className="input-field"
        ></textarea>

        {/* Payment Method */}
        <div className="payment-section">
          <label className="payment-label">Payment Method</label>
          <div className="radio-options">
            <label className="radio-option">
              <input
                type="radio"
                name="payment"
                value="cash"
              />
              Cash on Delivery
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="payment"
                value="credit"
              />
              Credit Card
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name="payment"
                value="online"
              />
              Online Payment
            </label>
          </div>
        </div>

        {/* Submit Button */}
        
          <button
            type="submit"
            className="submit-btn">Submit</button>
       
      </form><br /><br />

      {/* Showroom Information Section */}
      <div className="showroom-info">
        <h2 id="visit" className="showroom-heading">Visit Our Showroom</h2>

        {/* Business Days and Visiting Hours */}
        <p >
          <strong>Business Days:</strong> Monday - Saturday
        </p>
        <p >
          <strong>Visiting Hours:</strong> 10:00 AM - 7:00 PM
        </p>

        {/* Address */}
        <p >
          <strong>Address:</strong> 123 Furniture Street, Furniture City, FC 12345
        </p>

        {/* Contact Number */}
        <p>
          <strong>Contact Info:</strong> (123) 456-7890 | email@example.com
        </p>
        {/* Email */}
        <p>
          <strong>Email:</strong> email@example.com
        </p>

        {/* Location */}
        <p>
          <strong>Location:</strong>
          <a href="https://www.google.com/maps" target="_blank">View on Google Maps</a>
        </p>
      </div>
    </div>
  );
}
