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
  title: string;
  description: string;
  imageUrl: string;
  year?: string;
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
                    alt={certificate.title}
                    className={styles.certificateImg}
                  />
                </div>
                
                <div className={styles.certificateContent}>
                  {/* <h4>{certificate.title}</h4>
                  <p>{certificate.description}</p>
                  {certificate.year && (
                    <div className={styles.certificateYear}>
                      Год получения: {certificate.year}
                    </div>
                  )} */}
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
              {/* <h3>{selectedCertificate.title}</h3> */}
              <div className={styles.popupImageContainer}>
                <img 
                  src={selectedCertificate.imageUrl} 
                  alt={selectedCertificate.title}
                  className={styles.popupImage}
                />
              </div>
              {/* <p>{selectedCertificate.description}</p>
              {selectedCertificate.year && (
                <div className={styles.popupYear}>
                  <strong>Год получения:</strong> {selectedCertificate.year}
                </div>
              )} */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}