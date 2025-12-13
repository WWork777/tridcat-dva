// components/services/specialists/specialists-slider.tsx
"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Link from "next/link";
import { specialistsData } from "@/data/specialists.data";

interface SliderCardProps {
  img: string;
  name: string;
  description: string;
  stage?: string;
  showStage?: boolean;
  link?: string;
  showWhatsApp?: boolean;
  waLink?: string; // Добавляем пропс для WhatsApp ссылки
}

interface SpecialistsProps {
  title?: string;
  excludeId?: string; // Добавляем пропс для исключения конкретного специалиста
}

export const SliderCard = ({
  img,
  name,
  description,
  stage,
  showStage = true,
  link,
  showWhatsApp = true,
  waLink = "", // Добавляем waLink
}: SliderCardProps) => {
  return (
    <div className={styles.slider_card}>
      <a href={link} >
          <div className={styles.card_link}>
          <img src={img} alt={name} className={styles.specialistImage} />
          <h3>
            {(() => {
              // Проверяем ширину экрана
              const isNotMobile = typeof window !== 'undefined' && window.innerWidth >= 1200;
              
              if (isNotMobile) {
                const words = name.split(' ');
                if (words.length >= 3) {
                  const firstLine = words.slice(0, 2).join(' ');
                  const secondLine = words.slice(2).join(' ');
                  return (
                    <>
                      {firstLine}<br/>{secondLine}
                    </>
                  );
                }
              }
              return name;
            })()}
          </h3>
          <p>{description}</p>
        </div>
      </a>
      
      <div className={styles.card_footer}>
        {showStage && stage && <span>Стаж: {stage}</span>}

        {showWhatsApp &&
          waLink && ( // Показываем WhatsApp только если есть ссылка
            <Link href={waLink} target="_blank" rel="noopener noreferrer">
              <img src="/socials/telegram.svg" alt="WhatsApp" />
            </Link>
          )}
      </div>
    </div>
  );
};

export default function Specialists( {title, excludeId}: SpecialistsProps ) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [procedureName, setProcedureName] = useState("");
  const toggleModal = (procedureName = "") => {
    setIsModalOpen(!isModalOpen);
    setProcedureName(procedureName);
  };
    // Получаем всех специалистов
  
  

  const allSpecialists = Object.values(specialistsData);

  const filteredSpecialists = excludeId 
    ? allSpecialists.filter(specialist => specialist.id !== excludeId)
    : allSpecialists;


  return (
    <>
      <section id="specialists" className="component">
        <div className={styles.head}>
          <div className={styles.leftSide}>
            <h2 className={`${title ? styles.anotherSpec : null}`}>{title ? title : "Специалисты"}</h2>
            <div className={`${styles.custom_navigation}`}>
              <div className={`${styles.custom_prev}`}></div>
              <div className={`${styles.custom_next}`}></div>
            </div>
          </div>
          
          <Link href="/specialists" className={styles.all_button}>
            <span>Все специалисты</span>
          </Link>
        </div>

        <div className={styles.home_team_slider}>
          
          
          <Swiper
            modules={[Navigation, Pagination]}
            className={styles.mySwiper}
            spaceBetween={20}
            slidesPerView="auto"
            navigation={{
              nextEl: `.${styles.custom_next}`,
              prevEl: `.${styles.custom_prev}`,
              disabledClass: "swiper-button-disabled",
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.1,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1600: {
                slidesPerView: 3.8,
                spaceBetween: 40,
              },
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {filteredSpecialists.map((specialist) => (
              <SwiperSlide key={specialist.id}>
                <SliderCard
                  img={specialist.imageLink}
                  name={specialist.name}
                  description={specialist.description}
                  stage={specialist.stage}
                  showStage={!!specialist.stage}
                  link={`/specialists/${specialist.id}`}
                  showWhatsApp={true}
                  waLink={specialist.waLink}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
        </div>
      </section>
    </>
  );
}
