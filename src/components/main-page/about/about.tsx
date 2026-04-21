"use client";
import { useState } from "react";
import styles from "./styles.module.scss";

export default function About() {
  // Добавляем состояние для управления модальным окном
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="about" className="component">
      <div>
        <h2>О нас</h2>
      </div>
      <div className={styles.about}>
        <div className={styles.about_top}>
          {/* Видео-превью (кликабельное) */}
          <video
            className={styles.about_top__image}
            src="/about/IMG_6346.MOV"
            autoPlay
            loop
            muted
            playsInline
            onClick={() => setIsVideoOpen(true)} // Открываем модалку при клике
          ></video>

          <div className={styles.about_top_rigth}>
            <div className={styles.about_top__rigth__top}>
              <h3>
                Ваша <span>улыбка</span> в надежных руках
              </h3>
              <p>
                Для нас ваша улыбка — это часть вашей индивидуальности, источник
                уверенности и качества жизни. Мы не просто ставим пломбы или
                протезы, мы восстанавливаем гармонию, помогая вам снова
                улыбаться без стеснения.
              </p>
            </div>

            <div className={styles.about_top__rigth__bottom}>
              <div className={styles.about_top__rigth__bottom__item}>
                <span>01</span>
                <p>28 лет дарим улыбку людям</p>
              </div>
              <div className={styles.about_top__rigth__bottom__item}>
                <span>02</span>
                <p>Лечение без боли</p>
              </div>
              <div className={styles.about_top__rigth__bottom__item}>
                <span>03</span>
                <p>Новейшие технологии</p>
              </div>
              <div className={styles.about_top__rigth__bottom__item}>
                <span>04</span>
                <p>Комфортная атмосфера</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Модальное окно с плеером */}
      {isVideoOpen && (
        <div
          className={styles.video_modal}
          onClick={() => setIsVideoOpen(false)}
        >
          {/* Контент модалки. e.stopPropagation() не дает закрыть окно при клике на само видео */}
          <div
            className={styles.video_modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.video_modal__close}
              onClick={() => setIsVideoOpen(false)}
            >
              &times;
            </button>
            <video
              src="/about/IMG_6346.MOV"
              controls // Добавляем панель управления (звук, пауза)
              autoPlay // Запускаем автоматически со звуком
              playsInline
            ></video>
          </div>
        </div>
      )}
    </section>
  );
}
