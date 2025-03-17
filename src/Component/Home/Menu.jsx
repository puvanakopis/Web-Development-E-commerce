import React, { useState, useEffect } from "react";
import "./Menu.css";
import iPhone from './../../assets/home/Menu/IPhone.png'
import smartwatchImage from './../../assets/home/Menu/smartwatchImage.png'
import gamingLaptopImage from './../../assets/home/Menu/gamingLaptopImage.png'

// List of product categories
const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
];


//slider images and content
const slides = [
    {
        id: 1,
        title: "Up to 10% off Voucher",
        subtitle: "iPhone 14 Series",
        image: iPhone,
        description: "Shop Now →",
    },
    {
        id: 2,
        title: "Mega Discounts",
        subtitle: "Smart Watches Collection",
        image: smartwatchImage,
        description: "Discover Now →",
    },
    {
        id: 3,
        title: "Limited Time Offer",
        subtitle: "Gaming Laptops Sale",
        image: gamingLaptopImage,
        description: "Check Deals →",

    },
];

const Menu = () => {
    ///slider images and content changing
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to move to the next slide
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    // Automatically change slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);



    return (
        <div className="menu-container">




            {/* ------------------------------- Category Sidebar ------------------------------- */}
            <div className="category-sidebar">
                <ul>
                    {categories.map((category, index) => (
                        <li key={index}>
                            {category} {index < 2 && <span>›</span>}
                        </li>
                    ))}
                </ul>
            </div>







            {/* ------------------------------- Hero Image Slider ------------------------------- */}
            <div className="hero-slider">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${currentSlide === index ? "active" : ""}`}
                    >
                        <img src={slide.image} alt={slide.title} className="slide-image" />
                        <div className="slide-content">
                            <span className="slide-subtitle">{slide.subtitle}</span>
                            <h2 className="slide-title">{slide.title}</h2>
                            <a href="#" className="slide-button">
                                {slide.description}
                            </a>
                        
                        </div>
                    </div>
                ))}

                {/* Dots Navigation */}
                <div className="dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentSlide === index ? "active" : ""}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Menu;