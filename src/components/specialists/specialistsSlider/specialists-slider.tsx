"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Link from "next/link";

// Интерфейс для специалиста (должен совпадать с тем, что в specialists.data.ts)
interface Specialist {
  id: string;
  name: string;
  description: string;
  stage?: string;
  waLink?: string;
  imageLink: string;
}

// Пропсы для компонента SpecialistsService
interface SpecialistsServiceProps {
  specialists: Specialist[];
}

// Компонент карточки специалиста
const SliderCard = ({ specialist }: { specialist: Specialist }) => {
  return (
    <div className={styles.slider_card}>
      <a href={`/specialists/${specialist.id}`}>
        <img
          src={specialist.imageLink}
          alt={specialist.name}
          className={styles.specialistImage}
        />
        <h3>{specialist.name}</h3>
        <p>{specialist.description}</p>
      </a>
      
      <div className={styles.card_footer}>
        <span>Стаж: {specialist.stage}</span>
        <Link href={specialist.waLink || "#"}>
          <img src="/socials/telegram.svg" alt="WhatsApp" />
        </Link>
      </div>
    </div>
  );
};

export default function SpecialistsService({
  specialists,
}: SpecialistsServiceProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [procedureName, setProcedureName] = useState("");

  const toggleModal = (procedureName = "") => {
    setIsModalOpen(!isModalOpen);
    setProcedureName(procedureName);
  };

  // Если нет специалистов для этой услуги, не показываем секцию
  if (!specialists || specialists.length === 0) {
    return null;
  }

  return (
    <section id="specialists" className="component">
      <div className={styles.title}>
        <h2>Специалисты направления</h2>
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
          {specialists.map((specialist) => (
            <SwiperSlide key={specialist.id}>
              <SliderCard specialist={specialist} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
