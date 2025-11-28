"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import Link from "next/link";

interface SliderCard {
  img: string;
  date: string;
  title: string;
}

const SliderCard = ({ img, date, title }: SliderCard) => {
  return (
    <div className={styles.slider_card}>
      <Link href="#">
        <img src={img} alt="" className={styles.blogImage} />
        <span>{date}</span>
        <p>{title}</p>
      </Link>
    </div>
  );
};

interface HomeTeamProps {
  teamTitle: string;
  teamSubTitle: string;
}

export default function BlogSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [procedureName, setProcedureName] = useState("");
  const toggleModal = (procedureName = "") => {
    setIsModalOpen(!isModalOpen);
    setProcedureName(procedureName);
  };
  return (
    <>
      <section id="blog" className="component">
        <div>
          <h2>Блог</h2>
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
                slidesPerView: 2.5,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 3.2,
                spaceBetween: 40,
              },
            }}
            onInit={(swiper) => {
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide>
              <SliderCard
                img="/blog/blog1.jpg"
                date="12.09.2025"
                title="Лечение кариеса в стоматологии «Тридцать два»: забота о ваших зубах без боли"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/blog/blog2.jpg"
                date="12.09.2025"
                title="Современные методы эстетического восстановления зубов в стоматологии «Тридцать два»"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/blog/blog3.jpg"
                date="12.09.2025"
                title="Удаление зуба — страшно или нет? Как подготовиться к приёму"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/blog/blog4.jpg"
                date="12.09.2025"
                title="Когда идти к детскому стоматологу в Кемерово: первые симптомы больных зубов"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
