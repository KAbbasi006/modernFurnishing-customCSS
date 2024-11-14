// /src/app/dining/page.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const DiningroomPage = () => {
    const diningroomDesigns = [
        { id: 1, price: 5000, imageUrl: '/images/diningroom-imgs/dr1.jpg' },
        { id: 2, price: 7500, imageUrl: '/images/diningroom-imgs/dr2.jpg' },
        { id: 3, price: 6200, imageUrl: '/images/diningroom-imgs/dr3.jpg' },
        { id: 4, price: 4800, imageUrl: '/images/diningroom-imgs/dr4.jpg' },
        { id: 5, price: 9000, imageUrl: '/images/diningroom-imgs/dr5.jpg' },
        { id: 6, price: 8500, imageUrl: '/images/diningroom-imgs/dr6.jpg' },
    ];

    const [cart, setCart] = useState<number[]>(Array(diningroomDesigns.length).fill(0));

    const handleAddToCart = (index: number) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            updatedCart[index] += 1;
            return updatedCart;
        });
    };

    return (
        <div className="dining-container">
            <h2 className="dining-header">Diningroom Furniture</h2>

            {/* Navigation Buttons */}
            <div className="dining-nav-buttons">
                <Link className="dining-nav-links" href="/bedroom">Bed Room Furniture</Link>
                <Link className="dining-nav-links" href="/living">Living Room Furniture</Link>
            </div>

            <p className="dining-description"> Elevate your dining experience with our beautifully crafted dining furniture, designed to combine elegance and functionality. Each piece is made from high-quality materials, adding a touch of sophistication to family meals and gatherings, ensuring comfort and style in every detail.</p>

            <div className="dining-grid">
                {diningroomDesigns.map((design, index) => (
                    <div key={design.id} className="dining-card">
                        <a href={design.imageUrl} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={design.imageUrl}
                                alt={`Design ${design.id}`}
                                width={300}
                                height={200}
                                className="dining-card-image" // Adjust heights for different screen sizes
                            />
                        </a>
                        <div className="dining-card-content">
                            <h3 className="dining-card-title">Design No {design.id}</h3>
                            <p className="dining-card-price">Price: ${design.price}</p>
                            <button
                                onClick={() => handleAddToCart(index)}
                                className="dining-card-button"
                            >
                                Add to Cart
                            </button>

                            {cart[index] > 0 && (
                                <div>
                                    <p className="dining-card-quantity">Quantity: {cart[index]}</p>
                                    <Link href="/order" className="dining-card-link">
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

export default DiningroomPage;
