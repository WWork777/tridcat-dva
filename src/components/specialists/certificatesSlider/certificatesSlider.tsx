'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from './certificatesSlider.module.scss';

interface Certificate {
  id: string;
  imageUrl: string;
}

interface CertificatesSwiperProps {
  certificates: Certificate[];
}

export default function CertificatesSwiper({ certificates }: CertificatesSwiperProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const openPopup = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
  };

  const closePopup = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className={styles.certificatesSwiper}>
        <Swiper
          modules={[Navigation, Pagination]}
        //   navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className={styles.swiper}
        >
          {certificates.map((certificate) => (
            <SwiperSlide key={certificate.id} className={styles.slide}>
              <div 
                className={styles.certificateCard}
                onClick={() => openPopup(certificate)}
              >
                <div className={styles.certificateImage}>
                  <img 
                    src={certificate.imageUrl} 
                    className={styles.certificateImg}
                  />
                </div>
                
                <div className={styles.certificateContent}>
                  <span className={styles.viewButton}>Посмотреть</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popup для просмотра сертификата */}
      {selectedCertificate && (
        <div className={styles.popupOverlay} onClick={closePopup}>
          <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closePopup}>×</button>
            <div className={styles.popupText}>
              <div className={styles.popupImageContainer}>
                <img 
                  src={selectedCertificate.imageUrl} 
                  className={styles.popupImage}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}