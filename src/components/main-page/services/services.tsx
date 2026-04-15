"use client";
import Link from "next/link";
import styles from "./styles.module.scss";
import React, { useState } from 'react';
import { UniversalModalForm } from "@/components/common/UniversalForm/UniversalModalForm";

interface ServiceCardProps {
  title: string;
  description: string;
  imageLink?: string;
  serviceId: string;
  titleForForm?: string;
}

export const ServiceCard = ({
  title,
  description,
  imageLink,
  serviceId,
  titleForForm,
}: ServiceCardProps) => {
  const handleAppointment = () => {
    const whatsappMessage = `Здравствуйте, хочу записаться на ${title}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "stomatologiya_32";
    // const whatsappUrl = `https://t.me/${phoneNumber}?text=${encodedMessage}`;
    const whatsappUrl = `https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };
  const [isFormOpen, setIsFormOpen] = useState(false);
  const serviceUrl = `/services/${serviceId}`;

  return (
    <>
    <div className={styles.service_card}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        {imageLink && (
          <img src={imageLink} alt={title} className={styles.serviceImage} />
        )}
      </div>
      <div className={styles.button_group}>
        <button className={styles.cta_button} onClick={() => setIsFormOpen(true)}>
          Записаться
        </button>
        <Link href={serviceUrl} className={styles.more_button}>
          Подробнее
        </Link>
      </div>

      
    </div>
    
    <UniversalModalForm
          isOpen={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          title={titleForForm || `Записаться на ${title}`}
          titleInText={`Услуга: ${title}`}
          loadingTitle="Подождите, отправляем заявку..."
          goalName="ServiceForm" // Отправит отдельную цель в Метрику
        />
    </>
    
  );
};

export default function Services() {
  const servicesData = [
    {
      id: "detskaya-stomatologiya",
      title: "Детская стоматология",
      titleForForm: "Записаться на прием к детскому стоматологу",
      description:
        "это комплекс процедур, направленных на удаление с зубов самого разного рода отложений.",
      imageLink: "services/1.png",
    },
    {
      id: "implantatsiya-zubov",
      title: "Имплантация зубов",
      titleForForm: "Записаться на консультацию по имплантации",
      description:
        "хирургическая процедура, которая позволяет вживлять в костную ткань челюсти искусственный корень — титановый имплант.",
      imageLink: "services/2.png",
    },
    {
      id: "ispravlenie-prikusa",
      title: "Исправление прикуса",
      titleForForm: "Записаться на приём к ортодонту",
      description:
        "Наша стоматология оказывает полный спектр услуг, направленный на исправление прикуса зубов.",
      imageLink: "services/prikus.png",
    },
    {
      id: "otbelivanie-zubov",
      title: "Отбеливание зубов",
      titleForForm: "Записаться на профессиональное отбеливание",
      description:
        "Белоснежные зубы – это неотъемлемый атрибут шикарной здоровой «голливудской» улыбки.",
      imageLink: "services/otbel.png",
    },
    {
      id: "professionalnaya-gigiena",
      title: "Профессиональная гигиена",
      titleForForm: "Записаться на чистку и профгигиену",
      description:
        "это комплекс процедур, направленных на удаление с зубов самого разного рода отложений.",
      imageLink: "services/gigiena.png",
    },
    {
      id: "rentgenodiagnostika",
      title: "Рентгенодиагностика",
      titleForForm: "Записаться на диагностику (рентген)",
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
            titleForForm={service.titleForForm} />
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
