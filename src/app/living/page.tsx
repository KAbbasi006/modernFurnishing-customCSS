'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const LivingroomPage = () => {
    const livingroomDesigns = [
        { id: 1, price: 5000, imageUrl: '/images/livingroom-imgs/lr1.jpg' },
        { id: 2, price: 7500, imageUrl: '/images/livingroom-imgs/lr2.jpg' },
        { id: 3, price: 6200, imageUrl: '/images/livingroom-imgs/lr3.jpg' },
        { id: 4, price: 4800, imageUrl: '/images/livingroom-imgs/lr4.jpg' },
        { id: 5, price: 9000, imageUrl: '/images/livingroom-imgs/lr5.jpg' },
        { id: 6, price: 8500, imageUrl: '/images/livingroom-imgs/lr6.jpg' },
    ];

    const [cart, setCart] = useState<number[]>(Array(livingroomDesigns.length).fill(0));

    const handleAddToCart = (index: number) => {
        setCart((prevCart) => {
            const updatedCart = [...prevCart];
            updatedCart[index] += 1;
            return updatedCart;
        });
    };

    return (
        <div className="living-container">
            <h2 className="living-header">Livingroom Furniture</h2>

            {/* Navigation Buttons */}
            <div className="living-nav-buttons">
                <Link className="living-nav-links" href="/bedroom">Bed Room Furniture</Link>
                <Link className="living-nav-links" href="/dining">Dining Room Furniture</Link>
            </div>

            <p className="living-description"> Elevate your dining experience with our beautifully crafted dining furniture, designed to combine elegance and functionality. Each piece is made from high-quality materials, adding a touch of sophistication to family meals and gatherings, ensuring comfort and style in every detail.</p>

            <div className="living-grid">
                {livingroomDesigns.map((design, index) => (
                    <div key={design.id} className="living-card">
                        <a href={design.imageUrl} target="_blank" rel="noopener noreferrer">
                            <Image
                                src={design.imageUrl}
                                alt={`Design ${design.id}`}
                                width={300}
                                height={200}
                                className="living-card-image" // Adjust heights for different screen sizes
                            />
                        </a>
                        <div className="living-card-content">
                            <h3 className="living-card-title">Design No {design.id}</h3>
                            <p className="living-card-price">Price: ${design.price}</p>
                            <button
                                onClick={() => handleAddToCart(index)}
                                className="living-card-button"
                            >
                                Add to Cart
                            </button>

                            {cart[index] > 0 && (
                                <div className="living-card-quantity">
                                    <p>Quantity: {cart[index]}</p>
                                    <Link href="/order" className="living-card-link">
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

export default LivingroomPage;
