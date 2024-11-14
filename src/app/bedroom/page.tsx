// /src/app/bedroom/page.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const BedroomPage = () => {
    const bedroomDesigns = [
        { id: 1, price: 5000, imageUrl: '/images/bedroom-imgs/bd1.jpg' },
        { id: 2, price: 7500, imageUrl: '/images/bedroom-imgs/bd2.jpg' },
        { id: 3, price: 6200, imageUrl: '/images/bedroom-imgs/bd3.jpg' },
        { id: 4, price: 4800, imageUrl: '/images/bedroom-imgs/bd4.jpg' },
        { id: 5, price: 9000, imageUrl: '/images/bedroom-imgs/bd5.jpg' },
        { id: 6, price: 8500, imageUrl: '/images/bedroom-imgs/bd6.jpg' },
    ];
    const [cart, setCart] = useState<number[]>(Array(bedroomDesigns.length).fill(0));

    const handleAddToCart = (index: number) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            updatedCart[index] += 1;
            return updatedCart;
        });
    };

    return (
        <div className="bed-container">
            <h2 className="bed-header">Bedroom Furniture</h2>

            {/* Navigation Buttons */}
            <div className="bed-nav-buttons">
                <Link className="bed-nav-links" href="/dining">Dining Furniture</Link>
                <Link className="bed-nav-links" href="/living">Living Room Furniture</Link>
            </div>

            <p className="bed-description"> Elevate your dining experience with our beautifully crafted dining furniture, designed to combine elegance and functionality. Each piece is made from high-quality materials, adding a touch of sophistication to family meals and gatherings, ensuring comfort and style in every detail.</p>

            <div className="bed-grid">
                {bedroomDesigns.map((design, index) => (
                    <div key={design.id} className="bed-card">
                        <a href={design.imageUrl} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={design.imageUrl}
                                alt={`Design ${design.id}`}
                                width={300}
                                height={200}
                                className="bed-card-image" // Adjust heights for different screen sizes
                            />
                        </a>
                        <div className="bed-card-content">
                            <h3 className="bed-card-title">Design No {design.id}</h3>
                            <p className="bed-card-price">Price: ${design.price}</p>
                            <button
                                onClick={() => handleAddToCart(index)}
                                className="bed-card-button"
                            >
                                Add to Cart
                            </button>

                            {cart[index] > 0 && (
                                <div className="bed-card-quantity">
                                    <p>Quantity: {cart[index]}</p>
                                    <Link href="/order" className="bed-card-link">
                                        View Items in Cart
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BedroomPage;
