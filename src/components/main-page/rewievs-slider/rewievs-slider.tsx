"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useRef } from "react";

interface SliderCard {
  name: string;
  date: string;
  stars: string;
  text: string;
}

interface ReviewAggregator {
  id: string;
  name: string;
  rating: number;
  reviewsCount: number;
  ratingsCount: number;
  reviews: SliderCard[];
  icon: string;
}

const SliderCard = ({ name, date, stars, text }: SliderCard) => {
  return (
    <div className={styles.slider_card}>
      <h3>{name}</h3>
      <span>{date}</span>
      <div className={styles.stars_container}>
        {Array.from({ length: parseInt(stars) }, (_, i) => (
          <img key={i} src="/rewievs/star.svg" alt="star" />
        ))}
      </div>
      <p>{text}</p>
      <b>Читать полностью</b>
    </div>
  );
};

export default function ReviewsSlider() {
  const [activeAggregator, setActiveAggregator] = useState<string>("all");
  const swiperRef = useRef<any>(null);

  // Моковые данные для разных агрегаторов
  const aggregatorsData: ReviewAggregator[] = [
    {
      id: "all",
      name: "Все отзывы",
      rating: 4.6,
      reviewsCount: 209,
      ratingsCount: 456,
      icon: "",
      reviews: [
        {
          name: "Ирина Константиновна",
          date: "23.08.2025",
          text: "Не могу молчать!!! Об этом чудо-специалисте, Враче с большой буквы должны знать все!!",
          stars: "5",
        },
        {
          name: "Анна Петрова",
          date: "22.08.2025",
          text: "Отличный сервис, профессиональный подход! Очень довольна результатом.",
          stars: "5",
        },
        {
          name: "Мария Сидорова",
          date: "21.08.2025",
          text: "Внимательный персонал, чисто и уютно. Рекомендую!",
          stars: "4",
        },
        {
          name: "Елена Васильева",
          date: "20.08.2025",
          text: "Очень понравилось отношение к клиентам, буду обращаться еще.",
          stars: "5",
        },
      ],
    },
    {
      id: "prodoktorov",
      name: "ПРОдокторов",
      rating: 4.8,
      reviewsCount: 156,
      ratingsCount: 156,
      icon: "/rewievs/prodoktorov-icon.svg",
      reviews: [
        {
          name: "Сергей Иванов",
          date: "23.08.2025",
          text: "Профессионалы своего дела! Отличная клиника с квалифицированными специалистами.",
          stars: "5",
        },
        {
          name: "Ольга Николаева",
          date: "22.08.2025",
          text: "Очень грамотный подход к лечению, спасибо врачам за внимательность.",
          stars: "5",
        },
      ],
    },
    {
      id: "yandex",
      name: "Яндекс",
      rating: 4.5,
      reviewsCount: 89,
      ratingsCount: 245,
      icon: "/rewievs/yandex-icon.svg",
      reviews: [
        {
          name: "Дмитрий Козлов",
          date: "23.08.2025",
          text: "Удобное расположение, приятные цены. Персонал вежливый и компетентный.",
          stars: "4",
        },
        {
          name: "Александра Смирнова",
          date: "21.08.2025",
          text: "Хорошая клиника, но есть небольшие замечания по организации записи.",
          stars: "4",
        },
      ],
    },
    {
      id: "2gis",
      name: "2GIS",
      rating: 4.3,
      reviewsCount: 45,
      ratingsCount: 55,
      icon: "/rewievs/2gis-icon.svg",
      reviews: [
        {
          name: "Виктор Павлов",
          date: "20.08.2025",
          text: "Неплохая клиника, удобно добираться. Врачи внимательные.",
          stars: "4",
        },
        {
          name: "Наталья Орлова",
          date: "19.08.2025",
          text: "Цены доступные, качество услуг на уровне. Рекомендую.",
          stars: "5",
        },
      ],
    },
  ];

  const currentAggregator =
    aggregatorsData.find((agg) => agg.id === activeAggregator) ||
    aggregatorsData[0];

  const handleAggregatorChange = (aggregatorId: string) => {
    setActiveAggregator(aggregatorId);
    // Сбрасываем слайдер к началу при смене агрегатора
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <img
        key={index}
        src="/rewievs/star.svg"
        alt="star"
        style={{
          opacity: index < Math.floor(rating) ? 1 : 0.5,
        }}
      />
    ));
  };

  return (
    <>
      <section id="reviews" className="component">
        <div className={styles.rewievs_container}>
          <div className={styles.rewievs_container__top}>
            <div>
              <h2>Нам доверяют</h2>
            </div>
            <div className={`${styles.custom_navigation}`}>
              <div className={`${styles.custom_prev}`}></div>
              <div className={`${styles.custom_next}`}></div>
            </div>
          </div>
          <div className={styles.rewievs_container__bottom}>
            <div className={styles.rewievs_buttons}>
              {aggregatorsData.map((aggregator) => (
                <button
                  key={aggregator.id}
                  className={
                    activeAggregator === aggregator.id ? styles.active : ""
                  }
                  onClick={() => handleAggregatorChange(aggregator.id)}
                >
                  <p>{aggregator.name}</p>
                </button>
              ))}
            </div>
            <div className={styles.rating}>
              <h3>{currentAggregator.rating}</h3>
              <div className={styles.summary}>
                <div className={styles.stars}>
                  {renderStars(currentAggregator.rating)}
                </div>
                <div className={styles.rewievs_summary}>
                  <p>{currentAggregator.reviewsCount} отзывов</p>
                </div>
              </div>
              <div className={styles.rewievs_name}>
                <div className={styles.rewievs_geo}>
                  {currentAggregator.icon && (
                    <img src="/rewievs/geo.svg" alt={currentAggregator.name} />
                  )}
                  <p>{currentAggregator.name}</p>
                </div>
                <div className={styles.summary_marks}>
                  <p>{currentAggregator.ratingsCount} оценок</p>
                </div>
              </div>
              <div className={styles.rewievs_button}>
                <button>
                  <p>Оставить отзыв</p>
                </button>
              </div>
            </div>
          </div>
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
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            onInit={(swiper) => {
              swiperRef.current = swiper;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {currentAggregator.reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <SliderCard
                  name={review.name}
                  date={review.date}
                  text={review.text}
                  stars={review.stars}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
