'use client';

import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import styles from './gallery.module.scss';
import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";

const staffPhotos = [
  { id: 1, src: '/gallery/1.webp', alt: 'Специалист 1' },
  { id: 2, src: '/gallery/2.webp', alt: 'Специалист 2' },
  { id: 3, src: '/gallery/3.webp', alt: 'Специалист 3' },
  { id: 4, src: '/gallery/4.webp', alt: 'Специалист 4' },
  { id: 5, src: '/gallery/5.webp', alt: 'Специалист 5' },
  { id: 6, src: '/gallery/6.webp', alt: 'Специалист 6' },
  { id: 7, src: '/gallery/7.webp', alt: 'Специалист 7' },
  { id: 8, src: '/gallery/8.webp', alt: 'Специалист 8' },
  { id: 9, src: '/gallery/9.webp', alt: 'Специалист 9' },
  { id: 10, src: '/gallery/10.webp', alt: 'Специалист 10' },
  { id: 12, src: '/gallery/12.webp', alt: 'Специалист 12' },
  { id: 13, src: '/gallery/13.webp', alt: 'Специалист 13' },
  { id: 14, src: '/gallery/14.webp', alt: 'Специалист 14' },
  { id: 15, src: '/gallery/15.webp', alt: 'Специалист 15' },
  { id: 16, src: '/gallery/16.webp', alt: 'Специалист 16' },
  { id: 17, src: '/gallery/17.webp', alt: 'Специалист 17' },
];

export default function Gallery() {
  const [activeId, setActiveId] = useState(staffPhotos[0].id);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Оптимизированный обработчик наведения
  const handleMouseEnter = (id: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveId(id);
    }, 50); // Небольшой дебаунс убирает рывки при быстром пролете мыши
  };

  return (
    <section className="container" style={{ overflowX: 'unset' }}>
    <BreadCrumbs
                items={[{ label: "Главная", href: "/" }, { label: "Галлерея" }]}
            />
      <h1 className={styles.title}>Галерея нашей клиники</h1>
      
      <div className={styles.galleryGrid}>
        {/* Левая сетка превью */}
        <div className={styles.Images}>
          {staffPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className={`${styles.smallImageWrapper} ${activeId === photo.id ? styles.active : ''}`}
              onMouseEnter={() => handleMouseEnter(photo.id)}
            >
              <img 
                src={photo.src} 
                alt={photo.alt} 
                className={styles.thumb} 
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Правое большое фото */}
        <div className={styles.BigImage}>
          <div className={styles.stickyContainer}>
            {staffPhotos.map((photo) => (
              <motion.img
                key={photo.id}
                src={photo.src}
                initial={false}
                animate={{ 
                  opacity: activeId === photo.id ? 1 : 0,
                  scale: activeId === photo.id ? 1 : 1.05,
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: [0.25, 1, 0.5, 1] 
                }}
                className={styles.mainPhoto}
                style={{ 
                  position: activeId === photo.id ? 'relative' : 'absolute',
                  zIndex: activeId === photo.id ? 2 : 1 
                }}
                decoding="sync"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}