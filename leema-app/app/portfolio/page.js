'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from './port.module.css';
function Photo({ imageSrc,category }) {
  return (
    <div className={`col-6 ${styles.zoom}`}>
      <Image
        src={imageSrc}
        width={300}
        height={400}
        className="img-fluid cursor-pointer"
        alt="sample image"
      />
    </div>
  );
}
export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all'); 

  const imageSources = [
    { src: '/images/cover1.jpg', category: 'mobile' },
    { src: '/images/cover3.jpg', category: 'web' },
    { src: '/images/cover2.jpg', category: 'mobile' },
    { src: '/images/cover2.jpg', category: 'mobile' },
    { src: '/images/cover2.jpg', category: 'mobile' },
    { src: '/images/cover3.jpg', category: 'web' },
    { src: '/images/cover3.jpg', category: 'web' },
    { src: '/images/cover3.jpg', category: 'web' },
    { src: '/images/cover3.jpg', category: 'web' },
    { src: '/images/cover2.jpg', category: 'mobile' },
    { src: '/images/cover3.jpg', category: 'web' },
    { src: '/images/cover2.jpg', category: 'mobile' },
  ];

  const filterImages = (category) => {
    setSelectedCategory(category);
  };

  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container justify-content-center align-items-center text-center">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="section-heading fs-1 fw-bold mb-8 mt-8" style={{ color: 'rgb(23 37 84)' }}>
              Our Portfolio
            </h2>
          </div>
          <ul className={styles.list}>
            <li className={styles.li}>
              <button className="nav-link fw-bold" onClick={() => filterImages('all')}>
                ALL
              </button>
            </li>
            <li className={styles.li}>
              <button className="nav-link active fw-bold" onClick={() => filterImages('web')}>
                Web App
              </button>
            </li>
            <li className={styles.li}>
              <button className="nav-link active fw-bold" onClick={() => filterImages('mobile')}>
                Mobile App
              </button>
            </li>
          </ul>
        </div>
        <div className="row">
  {imageSources
    .filter((image) => selectedCategory === 'all' || image.category === selectedCategory)
    .map((image, index) => (
      <Photo key={index} imageSrc={image.src} />
    ))}
</div>
        <button type="button" className="btn justify-center mb-4 text-bold text-white" style={{ background: '#fd6027' }}>
          LOAD MORE
        </button>
      </div>
    </section>
  );
}
