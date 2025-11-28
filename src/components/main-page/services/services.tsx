"use client";
import Link from "next/link";
import styles from "./styles.module.scss";

interface ServiceCardProps {
  title: string;
  description: string;
  imageLink?: string;
  serviceId: string;
}

export const ServiceCard = ({
  title,
  description,
  imageLink,
  serviceId,
}: ServiceCardProps) => {
  const handleAppointment = () => {
    const whatsappMessage = `Здравствуйте, хочу записаться на ${title}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "79029830005";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const serviceUrl = `/services/${serviceId}`;

  return (
    <div className={styles.service_card}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {imageLink && (
          <img src={imageLink} alt={title} className={styles.serviceImage} />
        )}
      </div>
      <div className={styles.button_group}>
        <button className={styles.cta_button} onClick={handleAppointment}>
          Записаться
        </button>
        <Link href={serviceUrl} className={styles.more_button}>
          Подробнее
        </Link>
      </div>
    </div>
  );
};

export default function Services() {
  const servicesData = [
    {
      id: "detskaya-stomatologiya",
      title: "Детская стоматология",
      description:
        "это комплекс процедур, направленных на удаление с зубов самого разного рода отложений.",
      imageLink: "services/1.png",
    },
    {
      id: "implantatsiya-zubov",
      title: "Имплантация зубов",
      description:
        "хирургическая процедура, которая позволяет вживлять в костную ткань челюсти искусственный корень — титановый имплант.",
      imageLink: "services/2.png",
    },
    {
      id: "ispravlenie-prikusa",
      title: "Исправление прикуса",
      description:
        "Наша стоматология оказывает полный спектр услуг, направленный на исправление прикуса зубов.",
      imageLink: "services/3.png",
    },
    {
      id: "otbelivanie-zubov",
      title: "Отбеливание зубов",
      description:
        "Белоснежные зубы – это неотъемлемый атрибут шикарной здоровой «голливудской» улыбки.",
      imageLink: "services/5.png",
    },
    {
      id: "professionalnaya-gigiena",
      title: "Профессиональная гигиена",
      description:
        "это комплекс процедур, направленных на удаление с зубов самого разного рода отложений.",
      imageLink: "services/4.png",
    },
    {
      id: "rentgenodiagnostika",
      title: "Рентгенодиагностика",
      description:
        "С помощью рентгенодиагностики стоматологи определяют глубину поражения зуба кариесов, наличие кист и гранулем, оценивают состояние костных тканей.",
      imageLink: "services/6.png",
    },
  ];

  return (
    <section id="services" className="component">
      <div>
        <h2>Услуги</h2>
      </div>
      <div className={styles.services_list}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            serviceId={service.id}
            title={service.title}
            description={service.description}
            imageLink={service.imageLink}
          />
        ))}
      </div>
      <div className={styles.all_services_button}>
        <Link href="/services" className={styles.all_services}>
          <p>Все услуги</p>
        </Link>
      </div>
    </section>
  );
}
