// /src/components/productcard.tsx

import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  addToCart?: () => void; // optional addToCart for Popular Products usage
  viewMoreLink?: string;  // added viewMoreLink as an optional prop
}

export default function ProductCard({ title, price, image, addToCart, viewMoreLink }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="product-card-image">
        <Image src={image} alt={title} width={320} height={256} />
      </div>
      <h3 className="product-card-title">{title}</h3>
      <p className="product-card-price">${price}</p>
      
      {/* Conditionally render "Add to Cart" or "View More" based on prop availability */}
      {addToCart ? (
        <button onClick={addToCart} className="product-card-button">
          Add to Cart
        </button>
      ) : viewMoreLink ? (
        <Link href={viewMoreLink} className="product-card-button">
          View More
        </Link>
      ) : null}
    </div>
  );
}
