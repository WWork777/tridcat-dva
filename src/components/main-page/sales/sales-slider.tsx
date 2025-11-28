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
  text: string;
}

const SliderCard = ({ img, text }: SliderCard) => {
  return (
    <div className={styles.slider_card}>
      <h3>{text}</h3>
      <img src={img} alt="" className={styles.saleImage} />
      <div className={styles.card_footer}>
        <button>
          <p>Подробнее</p> <img src="/sales/sale.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

interface HomeTeamProps {
  teamTitle: string;
  teamSubTitle: string;
}

export default function Sales() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [procedureName, setProcedureName] = useState("");
  const toggleModal = (procedureName = "") => {
    setIsModalOpen(!isModalOpen);
    setProcedureName(procedureName);
  };
  return (
    <>
      <section id="sales" className="component">
        <div>
          <h2>Акции</h2>
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
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 2.3,
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
                img="/sales/sale.png"
                text="Обновление цен: самые выгодные условия на импланты в Кемерово"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/sales/sale.png"
                text="Осень — время обновлений. Начни с улыбки!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/sales/sale.png"
                text="Осень скидок — время для белоснежной улыбки!"
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderCard
                img="/sales/sale.png"
                text="Осень скидок — время для белоснежной улыбки!"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
