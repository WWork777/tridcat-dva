"use client";
import Link from 'next/link';
import styles from './styles.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// import { MediaPlayer, MediaProvider } from '@vidstack/react';
// import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
// import '@vidstack/react/player/styles/default/theme.css';
// import '@vidstack/react/player/styles/default/layouts/video.css';

export default function HeroBlock() {
  return (
    <section className={`${styles.hero__section}`}>
      <div className={styles.hero_left}>
        <div className={styles.hero_left__top}>
          <h1>
            Стоматология <br/>для всей семьи
          </h1>
          <p>
            Клиника влюбленных в свое дело <br /> Профилактика и лечение зубов
          </p>
          <Link
            // href='https://t.me/stomatologiya_32?text=Здравствуйте хочу записаться на прием'
            href={'https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM'}
            className={styles.corner_button}
          >
            <span>Записаться онлайн</span>
          </Link>
        </div>
        <div className={`${styles.hero_left__bottom}`}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: true }}
            speed={1500}
            // allowTouchMove={false}
            pagination={{ clickable: true }}
            className={styles.hero_slider}
          >
            {/* <SwiperSlide>
              <div className={`${styles.hero_left__bottom__left}`}>
                <p>Скидка <span>10%</span> для женщин, <span>впервые</span> посетивших нашу стоматологическую клинику c 6.03 до 1.04</p>
                <Link
                  href='https://t.me/stomatologiya_32?text=Здравствуйте, хочу узнать по поводу акции скидка 10% 6.03-1.04'
                  className={styles.corner_button}
                >
                  Узнать подробности
                </Link>
              </div>
            </SwiperSlide> */}
            <SwiperSlide>
              <div className={`${styles.hero_left__bottom__left} ${styles.second_slide}`}>
                <p>Отбеливание <span>Amazing White</span> с использованием лампы <span>Zoom4</span> <br /><span>15.000 </span>рублей вместо 22.000 рублей до конца весны</p>
                <Link
                  // href='https://t.me/stomatologiya_32?text=Здравствуйте, хочу узнать по поводу отбеливании Amazing White'
                  href={'https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM'}
                  className={styles.corner_button}
                >
                  Узнать подробности
                </Link>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className={`${styles.hero_left__bottom__left} ${styles.third_slide}`}>
                <p>Скидка <span>10%</span> на все услуги для тех, кто <span>впервые</span> посетит нашу клинику с 1.04 по 1.05</p>
                <Link
                  // href='https://t.me/stomatologiya_32?text=Здравствуйте, хочу узнать по поводу скидки для новых клиентов'
                  href={'https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM'}
                  className={styles.corner_button}
                >
                  Узнать подробности
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={styles.hero_right}>
        <div className={`${styles.hero_right__rigth} ${styles.container}`}>
          <p>
            Стоматологи, которым вы<br></br> можете доверять
          </p>
          <img
            src='/hero/women.png'
            alt='Квалифицированные стоматологи клиники'
          />
          <div className={styles.hero_buttons__right}>
            <button>
              <span>Професcионализм</span>
            </button>
            <button>
              <span>Качество</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
