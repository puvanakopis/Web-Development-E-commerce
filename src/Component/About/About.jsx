import React from 'react'
import './About.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import aboutImage from '../../assets/about/Side Image.png'
import sellersIcon from '../../assets/about/Group1.png'
import salesIcon from '../../assets/about/Group3.png'
import customersIcon from '../../assets/about/Group4.png'
import revenueIcon from '../../assets/about/Group2.png'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import person1 from '../../assets/about/person1.png'
import person2 from '../../assets/about/person2.png'
import person3 from '../../assets/about/person3.png'

import customerServiceIcon from '../../assets/about/Icon-Customer service.png'
import secureIcon from '../../assets/about/Icon-secure.png'
import deliveryIcon from '../../assets/about/icon-delivery.png'

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


const About = () => {

  const teamMembers = [
    { name: "Tom Cruise", role: "Founder & Chairman", img: person1 },
    { name: "Emma Watson", role: "Managing Director", img: person2 },
    { name: "Will Smith", role: "Product Designer", img: person3 },
    { name: "Tom Cruise", role: "Founder & Chairman", img: person1 },
    { name: "Emma Watson", role: "Managing Director", img: person2 },
    { name: "Will Smith", role: "Product Designer", img: person3 },
  ];
  
  return (
    <div className='about-section'>
      

   


      {/* Story Section */}
      <div className="about-story">
        <div className="about-content">
          <h1>Our Story</h1>
          <p>Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace with an active presence in Bangladesh. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.</p>
          <p>Exclusive has more than 1 million products to offer and is growing rapidly. We provide a diverse assortment of categories, from consumer electronics to fashion.</p>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="Our Story" />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="stats-container">
        <div className="stats-card">
          <div className="stats-icon"><img src={sellersIcon} alt="Sellers" /></div>
          <h1>10.5K</h1>
          <p>Active Sellers</p>
        </div>
        <div className="stats-card stats-highlight">
          <div className="stats-icon"><img src={salesIcon} alt="Sales" /></div>
          <h1>33K</h1>
          <p>Monthly Product Sales</p>
        </div>
        <div className="stats-card">
          <div className="stats-icon"><img src={customersIcon} alt="Customers" /></div>
          <h1>45.5K</h1>
          <p>Active Customers</p>
        </div>
        <div className="stats-card">
          <div className="stats-icon"><img src={revenueIcon} alt="Revenue" /></div>
          <h1>25K</h1>
          <p>Annual Gross Sales</p>
        </div>
      </div>

{/* Team Section */}
<div className="team-container">
  <Swiper
    modules={[Pagination, Autoplay]}
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
  >
    {teamMembers.map((member, index) => (
      <SwiperSlide key={index} className="team-slide">
        <div className="team-member-card">
          <div className="member-image">
            <img src={member.img} alt={member.name} />
          </div>
          <div className="member-details">
            <h1 className="member-name">{member.name}</h1>
            <p className="member-role">{member.role}</p>
            <div className="social-icons">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
            </div>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* Services Section */}
      <div className="services-container">
        <div className="service-card">
          <div className="service-icon"><img src={deliveryIcon} alt="Delivery" /></div>
          <h1>FREE AND FAST DELIVERY</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div className="service-card">
          <div className="service-icon"><img src={customerServiceIcon} alt="Customer Service" /></div>
          <h1>24/7 CUSTOMER SERVICE</h1>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div className="service-card">
          <div className="service-icon"><img src={secureIcon} alt="Secure" /></div>
          <h1>MONEY BACK GUARANTEE</h1>
          <p>We return money within 30 days</p>
        </div>
      </div>

    </div>
  )
}

export default About;
