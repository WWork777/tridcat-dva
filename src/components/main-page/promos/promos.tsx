"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
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
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      { serviceId == 4 ? "" : <div className={styles.button_group}>
        <Link className={styles.cta_button} href={url}>
          Записаться
        </Link>
        <Link
          onClick={() => {
            if (typeof window !== "undefined") {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (window as any).ym(105543299, "reachGoal", "MaxMessenger");
            }
          }}
          href={url}
          className={styles.more_button}
        >
          Подробнее
        </Link>
      </div>}
    </div>
  );
};

export default function Promos({ pricesPage }: { pricesPage?: boolean }) {
  const [sale3, setSale3] = useState("/hero/promo4.jpg"); // серверное значение

useEffect(() => {
  setSale3(window.innerWidth <= 480 ? "/hero/promo4mv2.jpg" : "/hero/promo4.jpg");
}, []);
  console.log(sale3);
  const servicesData = [
    // {
    //   id: 1,
    //   title: "Скидка 10% к 8 марта",
    //   description:
    //     "Скидка 10% для женщин, впервые посетивших нашу стоматологическую клинику c 6.03 до 1.04",
    //   imageLink: "/hero/promo8march.webp",
    //   url: "https://t.me/stomatologiya_32?text=Здравствуйте, хочу узнать по поводу акции скидка 10% 6.03-1.04",
    // },
    {
      id: 2,
      title: "Скидки на отбеливание",
      description:
        "Отбеливание Amazing White с использованием лампы Zoom4 15.000 рублей вместо 22.000 рублей до конца весны",
      imageLink: "/hero/promo2v2.webp",
      // url: "https://t.me/stomatologiya_32?text=Здравствуйте, хочу узнать по поводу отбеливания Amazing White",
      url: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
    },
    {
      id: 3,
      title: "Скидка для новых клиентов",
      description:
        "Скидка 10% на все услуги для тех, кто впервые посетит нашу клинику",
      imageLink: "/promos/promo3.webp",
      // url: "https://t.me/stomatologiya_32?text=Здравствуйте, хочу узнать по поводу скидки для новых клиентов",
      url: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
    },
    {
      id: 4,
      imageLink: sale3,
      // url: "https://t.me/stomatologiya_32?text=Здравствуйте, хочу узнать по поводу скидки для новых клиентов",
      url: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
    },
  ];

  return (
    <section
      id="promos"
      className={`component ${pricesPage ? styles.pricesPage : "/hero/promo4.jpg"}`}
    >
      <div>
        <h2>Акции</h2>
      </div>
      <div className={`${styles.services_list}`}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            serviceId={service.id}
            title={service.title}
            description={service.description}
            imageLink={service.imageLink}
            url={service.url} // Теперь пропс передается правильно
          />
        ))}
      </div>
    </section>
  );
}
