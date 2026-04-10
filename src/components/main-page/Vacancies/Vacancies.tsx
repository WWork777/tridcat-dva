"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useEffect, useState } from "react";

// Данные выносим за пределы компонента
const vacanciesData = [
  {
    id: "dentist-orthopedist",
    title: "Стоматолог-ортопед",
    salary: "от 150 000 ₽",
    requirements: "Высшее медицинское образование, наличие действующего сертификата.",
    experience: "от 3 лет",
    waLink: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
  },
  {
    id: "assistant",
    title: "Ассистент стоматолога",
    salary: "от 60 000 ₽",
    requirements: "Среднее специальное мед. образование, ответственность, пунктуальность.",
    experience: "без опыта",
    waLink: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
  },
  {
    id: "administrator",
    title: "Администратор",
    salary: "от 50 000 ₽",
    requirements: "Опыт работы в CRM, грамотная речь, коммуникабельность.",
    experience: "от 1 года",
    waLink: "https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM",
  },
];

export default function VacanciesSlider({ title }: { title?: string }) {
  // Исправление гидратации и форсированный сброс кэша при монтировании
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  if (!domReady) return null;

  return (
    <section id="vacancies" className="component">
      <div className={styles.head}>
        <div className={styles.leftSide}>
          <h2 className={title ? styles.anotherSpec : ""}>
            {String(title || "Актуальные вакансии")}
          </h2>
          <div className={styles.custom_navigation}>
            <div className={`${styles.custom_prev} v-prev`}></div>
            <div className={`${styles.custom_next} v-next`}></div>
          </div>
        </div>
        <Link href="/vacancies" className={styles.all_button}>
          <span>Все вакансии</span>
        </Link>
      </div>

      <div className={styles.home_team_slider}>
        <Swiper
          modules={[Navigation, Pagination]}
          className={styles.mySwiper}
          spaceBetween={20}
          slidesPerView="auto"
          navigation={{
            nextEl: ".v-next",
            prevEl: ".v-prev",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 2 },
          }}
        >
          {vacanciesData.map((vacancy) => (
            <SwiperSlide key={vacancy.id}>
              <Link href={vacancy.waLink} target="_blank">
                <div className={styles.slider_card}>
                  <div className={styles.card_link}>
                    <div className={styles.vacancy_header}>
                      {/* Принудительно приводим к строке, чтобы split не на чем было падать */}
                      <h3>{String(vacancy.title || "")}</h3>
                      <span className={styles.salary_badge}>{vacancy.salary}</span>
                    </div>
                    <p>{vacancy.requirements}</p>
                  </div>
                  <div className={styles.card_footer}>
                    <div className={styles.vacancy_footer}>
                      <span>Опыт: {vacancy.experience}</span>
                      <span>Откликнуться</span>
                    </div>
                    
                    <span className={styles.wa_button}>
                      <img src="/socials/max.svg" alt="WA" />
                    </span>
                  </div>
                </div>
              </Link>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}