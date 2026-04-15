"use client";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UniversalModalForm } from "@/components/common/UniversalForm/UniversalModalForm";

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
  const [domReady, setDomReady] = useState(false);
  
  // Храним название выбранной вакансии (если null - форма закрыта)
  const [selectedVacancy, setSelectedVacancy] = useState<string | null>(null);

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
              {/* Поменяли button на div и передаем title вакансии в стейт */}
              <div 
                className={styles.slider_card} 
                onClick={() => setSelectedVacancy(vacancy.title)}
                style={{ cursor: 'pointer' }} // Чтобы было понятно, что карточка кликабельна
              >
                <div className={styles.card_link}>
                  <div className={styles.vacancy_header}>
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
                  
                  <Link 
                    href={vacancy.waLink} 
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        (window as any).ym(105543299, 'reachGoal', 'MaxMessenger');
                      }
                    }}
                    target="_blank" 
                    className={styles.wa_button}
                    // Останавливаем всплытие клика, чтобы при клике на иконку WA модалка не открывалась
                    onClick={(e) => e.stopPropagation()} 
                  >
                    <img src="/socials/max.svg" alt="WA" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Модальное окно ОДНО на весь компонент. Лежит вне слайдера */}
      <UniversalModalForm 
        isOpen={!!selectedVacancy} // Открыто, если selectedVacancy не null
        onClose={() => setSelectedVacancy(null)}
        title={`Отклик на вакансию: ${selectedVacancy}`}
        titleInText={`Заявка на вакансию: ${selectedVacancy}`}
        loadingTitle="Подождите, отправляем заявку..."
        goalName="VacancyForm"
      />
    </section>
  );
}