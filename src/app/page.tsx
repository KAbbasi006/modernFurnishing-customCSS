// /src/app/page.tsx
import Image from 'next/image';
import PopularProducts from '../components/popularproduct';

export default function HomePage() {
  return (
    <div>
     

<div className=" home-container">
  <Image
    src="/images/home-image.jpg"
    alt="Modern Sofa"
    fill
    sizes="(max-width: 640px) 100vw, (min-width: 641px) 100vw"
    className="home-background-image"
  />
  <div className="home-text-container">
    <h1 className="home-title">Modern Furnishing</h1>
    <p className="home-subtitle ">Stylish and Comfortable</p>
  </div>
</div>



      {/* Popular Products Section */}
      <PopularProducts />
    </div>
  );
}
