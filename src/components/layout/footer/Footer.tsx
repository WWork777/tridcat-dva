import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_left}>
        <Link href="/">
          <img src="/logo/logo.svg" alt="" className={styles.logo} />
        </Link>
        <div className={styles.footer_left_container}>
          <div className={styles.footer_left_item}>
            <img src="/footer/geo.svg" alt="" />
            <p>Кемерово, Советский, 32 БЦ «Доминант», 2 этаж,вход со двора</p>
          </div>
          <div className={styles.footer_left_item}>
            <img src="/footer/time.svg" alt="" />
            <p>
              Пн-Сб 9:00-20:00 <br></br> Вс 10:00-18:00
            </p>
          </div>
        </div>
      </div>
      <div className={styles.footer_center}>
        <div className={styles.footer_center_top}>
          <Link href="/#about" className={styles.footer_center_link}>
            <p>О клинике</p>
          </Link>
          <Link href="/services" className={styles.footer_center_link}>
            <p>Услуги</p>
          </Link>
          <Link href="/specialists" className={styles.footer_center_link}>
            <p>Специалисты</p>
          </Link>
        </div>
        <div className={styles.footer_center_top}>
          <Link href="/blog" className={styles.footer_center_link}>
            <p>Блог</p>
          </Link>
          <Link href="/#sales" className={styles.footer_center_link}>
            <p>Акции</p>
          </Link>
          <Link href="/#reviews" className={styles.footer_center_link}>
            <p>Отзывы</p>
          </Link>
          <Link href="/#contacts" className={styles.footer_center_link}>
            <p>Контакты</p>
          </Link>
        </div>
      </div>
      <div className={styles.footer_rigth}>
        <div className={styles.footer_rigth__item}>
          <img src="/footer/phone.svg" alt="" />
          <Link href="tel:+7(3842) 58 30 26">
            <p>+7(3842) 58 30 26</p>
          </Link>
          <div className={styles.footer_line}>|</div>
          <Link href="tel:+7 902 983 0005">
            <p>+7 902 983 0005</p>
          </Link>
        </div>
        <div className={styles.footer_rigth__item}>
          <img src="/footer/mail.svg" alt="" />
          <Link href="mailto:32_stoma@mail.ru">
            <p>32_stoma@mail.ru</p>
          </Link>
        </div>
        <div className={styles.footer_socials}>
          <Link href="https://wa.me/79029830005" className={styles.footer_socials_link}>
            <img src="/footer/wa.svg" alt="" />
          </Link>
          <Link href="https://m.vk.com/tridsat_dva" className={styles.footer_socials_link}>
            <img src="/footer/vk.svg" alt="" />
          </Link>
          <Link href="https://t.me/+79029830005" className={styles.footer_socials_link}>
            <img src="/footer/telegram.svg" alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
}
