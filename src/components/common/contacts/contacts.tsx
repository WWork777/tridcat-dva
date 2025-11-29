import styles from "./styles.module.scss";
import "./style.scss";
import Link from "next/link";

export default function Contacts() {
  return (
    <section id="contacts">
      <div className={styles.contacts_container}>
        <div className={styles.contacts}>
          <div className={styles.halfContacts}>
            <h2>Контакты</h2>
            <div className={styles.contacts_text}>
              <div className={styles.contacts_item}>
                <h3>Адрес</h3>

                <p> 
                  <Link href="https://yandex.ru/maps/org/tridtsat_dva/103320707341/?from=mapframe&indoorLevel=1&ll=86.075727%2C55.358015&mode=search&sctx=ZAAAAAgBEAAaKAoSCSlcj8L1IFVAEY%2BqJoi6mUtAEhIJibX4FADDDkARpRDIJY689D8iBgABAgMEBSgKOABAO0gBagJydZ0BzczMPaABAKgBAL0BQpAwcsIBBv7657D%2BBoICT9Ca0LXQvNC10YDQvtCy0L4sINCh0L7QstC10YLRgdC60LjQuSwgMzIg0JHQpiDCq9CU0L7QvNC40L3QsNC90YLCuywgMiDRjdGC0LDQtiyKAgCSAgI2NJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=86.075727%2C55.358015&source=mapframe&sspn=0.015020%2C0.005042&text=%D0%9A%D0%B5%D0%BC%D0%B5%D1%80%D0%BE%D0%B2%D0%BE%2C%20%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%B8%D0%B9%2C%2032%20%D0%91%D0%A6%20%C2%AB%D0%94%D0%BE%D0%BC%D0%B8%D0%BD%D0%B0%D0%BD%D1%82%C2%BB%2C%202%20%D1%8D%D1%82%D0%B0%D0%B6%2C&um=constructor%3A335208877bc6b471f169a3e74947880e08008dc840ffd1cb19b2361acb4aa5b2&utm_source=mapframe&z=17">
                  г. Кемерово. Советский проспект, 32, 2 этаж
                  </Link>
                </p>
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
          <div className={styles.halfContacts}>
            <div className={styles.map}>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A335208877bc6b471f169a3e74947880e08008dc840ffd1cb19b2361acb4aa5b2&amp;source=constructor"
                  width="500"
                  height="400"
                  frameBorder="0"
                ></iframe>
            </div>
          </div > 
            
        </div>
        
      </div>
    </section>
  );
}
