import styles from "./styles.module.scss";
import "./style.scss";
import Link from "next/link";

export default function Contacts() {
  return (
    <section id="contacts">
      <div className={styles.contacts_container}>
        <div className={styles.contacts}>
          <h2>Контакты</h2>
          <div className={styles.contacts_text}>
            <div className={styles.contacts_item}>
              <h3>Адрес</h3>
              <p>г. Кемерово. Советский проспект, 32, 2 этаж</p>
            </div>
            <div className={styles.contacts_item}>
              <h3>Телефон</h3>
              <p>
                <Link href="tel:+7 902 983 0005">+7 902 983 0005 </Link>
              </p>
              <p>
                <Link href="tel:+7(3842) 58 30 26">+7(3842) 58 30 26 </Link>
              </p>
            </div>
            <div className={styles.contacts_item}>
              <h3>Соцсети</h3>
              <div className={styles.socials}>
                <Link href="https://wa.me/79029830005" className={styles.social_link}>
                  <img src="/socials/wa.svg" alt="" />
                </Link>
                <Link href="https://m.vk.com/tridsat_dva" className={styles.social_link}>
                  <img src="/socials/vk.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.map}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A335208877bc6b471f169a3e74947880e08008dc840ffd1cb19b2361acb4aa5b2&amp;source=constructor"
            width="500"
            height="400"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
