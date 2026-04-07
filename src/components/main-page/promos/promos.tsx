"use client";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ServiceCardProps {
  title: string;
  description: string;
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
      <div className={styles.button_group}>
        <Link className={styles.cta_button} href={url}>
          Записаться
        </Link>
        <Link href={url} className={styles.more_button}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default function Promos({ pricesPage }: { pricesPage?: boolean }) {
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
      url: 'https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM'
    },
    {
      id: 3,
      title: "Скидка для новый клиентов",
      description:
        "Скидка 10% на все услуги для тех, кто впервые посетит нашу клинику",
      imageLink: "/promos/promo3.webp",
      // url: "https://t.me/stomatologiya_32?text=Здравствуйте, хочу узнать по поводу скидки для новых клиентов",
      url: 'https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM'
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