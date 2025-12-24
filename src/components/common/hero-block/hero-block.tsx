import Link from 'next/link';
import styles from './styles.module.scss';


import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

export default function HeroBlock() {
  return (
    <section className={`${styles.hero__section}`}>
      <div className={styles.hero_left}>
        <div className={styles.hero_left__top}>
          <h1>
            Стоматология для всей семьи
          </h1>
          <p>
            Клиника влюбленных в свое дело <br /> Профилактика и лечение зубов
          </p>
          <Link
            href='https://t.me/+79029830005?text=Здравствуйте хочу записаться на прием'
            className={styles.corner_button}
          >
            <span>Записаться онлайн</span>
          </Link>
        </div>
        <div className={`${styles.hero_left__bottom}`}>
          <div className={`${styles.hero_left__bottom__left}`}>
            {/* <img
              src='/hero/hero-first.png'
              alt='Современное стоматологическое оборудование'
            /> */}
            <MediaPlayer
              src={"/hero/video.mp4"}
              viewType="video"
              streamType="on-demand"
              logLevel="warn"
              crossOrigin
              playsInline={true}  // Явно указываем
              autoplay={true}     // Явно указываем
              muted={true}        // Явно указываем
              loop
              controls={false} // Отключает все элементы управления
              className={styles.videoBackground}
            >
              <MediaProvider />
          </MediaPlayer>
          </div>
          {/* <div
            className={`${styles.hero_left__bottom__rigth} ${styles.container}`}
          >
            <p>
              При установке имплантов Straumann <br></br> или Alpha-Bio вы
              получаете скидку 8000 <br></br> на каждый имплант!
            </p>
            <div className={styles.hero_buttons}>
              <button>
                <span>Импланты</span>
              </button>
              <button>
                <span>Акция</span>
              </button>
            </div>
          </div> */}
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
