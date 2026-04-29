"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";

interface ServiceCardProps {
  title?: string;
  description?: string;
  imageLink?: string;
  serviceId: number;
  url: string;
}

export const ServiceCard = ({
  title,
  description,
  imageLink,
  url,
  serviceId,
}: ServiceCardProps) => {
  return (
    <div
      className={`${styles.service_card} ${imageLink ? styles.has_bg : ""}`}
      style={imageLink ? { backgroundImage: `url(${imageLink})` } : undefined}
    >
      <div className={styles.card_content}>
        {title && <h3>{title}</h3>}
        {description && <p>{description}</p>}
      </div>
      {serviceId !== 4 && (
        <div className={styles.button_group}>
          <Link className={styles.cta_button} href={url}>
            Записаться
          </Link>
          <Link
            onClick={() => {
              if (typeof window !== "undefined") {
                (window as any).ym(105543299, "reachGoal", "MaxMessenger");
              }
            }}
            href={url}
            className={styles.more_button}
          >
            Подробнее
          </Link>
        </div>
      )}
    </div>
  );
};

export default function Promos({ pricesPage }: { pricesPage?: boolean }) {
  const [sale3, setSale3] = useState("/hero/promo4.jpg");

  useEffect(() => {
    const updateImage = () => {
      setSale3(window.innerWidth <= 480 ? "/hero/promo4mv2.jpg" : "/hero/promo4.jpg");
    };
    updateImage();
    window.addEventListener("resize", updateImage);
    return () => window.removeEventListener("resize", updateImage);
  }, []);

  const servicesData = [
    {
      id: 2,
      title: "Скидки на отбеливание",
      description:
        "Отбеливание Amazing White с использованием лампы Zoom4 15.000 рублей вместо 22.000 рублей до конца весны",
      imageLink: "/hero/promo2v2.webp",
      url: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
    },
    {
      id: 3,
      title: "Скидка для новых клиентов",
      description:
        "Скидка 10% на все услуги для тех, кто впервые посетит нашу клинику",
      imageLink: "/promos/promo3.webp",
      url: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
    },
    {
      id: 4,
      imageLink: sale3,
      url: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
    },
  ];

  return (
    <section
      id="promos"
      className={`component ${pricesPage ? styles.pricesPage : ""}`}
    >
      <div>
        <h2>Акции</h2>
      </div>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        // loop={true}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
        }}
        className={styles.swiper}
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}className={styles.slide}>
            <ServiceCard
              serviceId={service.id}
              title={service.title}
              description={service.description}
              imageLink={service.imageLink}
              url={service.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}