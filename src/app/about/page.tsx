// /src/app/about/page.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <div className="about-container">
      {/* Page Heading */}
      <h2 className="about-heading">About Us</h2>

      {/* Centered Content Wrapper */}
      <div className="about-content-wrapper">
        {/* Image Section */}
        <div className="about-image-wrapper">
          <Image
            src="/images/about-image.jpg"
            width={400}    // Set a fixed width
            height={300}   // Set a proportional height to control image shape
            alt="About Us"
            className="about-image"
          />
        </div>

        {/* Text Section */}
        <div className="about-text">
          <p>
            Discover unparalleled craftsmanship and superior quality furniture from
            the best manufacturers in the industry. Welcome home to a world of
            elegance and functionality, where every item is a masterpiece in itself.
          </p>
        </div>
      </div>

      {/* Explore Our Latest Products Section */}
      <div className="explore-section">
        <h3 className="explore-heading">Explore Our Latest Products</h3>

        {/* Description */}
        <p className="explore-description">
          Discover our range of stylish and durable furniture that brings comfort, functionality, and elegance to every space in your home.
        </p>

        {/* Buttons Section */}
        <div className="button-group">
          <Link href="/bedroom" className="explore-button">
            Bedroom Set
          </Link>
          <Link href="/dining" className="explore-button">
            Dining Room Set
          </Link>
          <Link href="/living" className="explore-button">
            Living Room Set
          </Link>
        </div>
      </div>
    </div>
  );
}
