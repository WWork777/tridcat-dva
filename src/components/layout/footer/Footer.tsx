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
          <div className={styles.footer_left_item}>
            <p>
              Разработка сайта:{" "}
              <Link href={"https://virlab42.ru"} target="_blanc">
                Вирлаб
              </Link>
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
          {/* <Link href="/#reviews" className={styles.footer_center_link}>
            <p>Отзывы</p>
          </Link> */}
          <Link href="/prices" className={styles.footer_center_link}>
            <p>Цены</p>
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
          <Link href="tel:+7(3842) 33 00 05">
            <p>+7(3842) 33 00 05</p>
          </Link>
          <div className={styles.footer_line}>|</div>
          <Link href="tel:+7(3842) 45-75-95">
            <p>+7(3842) 45-75-95</p>
          </Link>
        </div>
        <div className={styles.footer_rigth__item}>
          <img src="/footer/mail.svg" alt="" />
          <Link href="mailto:32_stoma@mail.ru">
            <p>32_stoma@mail.ru</p>
          </Link>
        </div>
        <div className={styles.footer_socials}>
          <Link
            href="https://wa.me/79029830005"
            className={styles.footer_socials_link}
          >
            <img src="/footer/wa.svg" alt="" />
          </Link>
          <Link
            href="https://m.vk.com/tridsat_dva"
            className={styles.footer_socials_link}
          >
            <img src="/footer/vk.svg" alt="" />
          </Link>
          <Link
            href="https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM"
            className={styles.footer_socials_link}
          >
            <img src="/footer/max.svg" alt="" />
          </Link>
          {/* <Link
            href="https://t.me/stomatologiya_32"
            className={styles.footer_socials_link}
          >
            <img src="/footer/telegram.svg" alt="" />
          </Link> */}
        </div>
      </div>
      <div className={styles.footer_warning}>
        <p className={styles.footer_warning__info}>
          ООО <span>|</span> «ТРИДЦАТЬ ДВА» <br/> 
          ИНН <span>|</span>4207048278 <br/>
          КПП <span>|</span>420501001 <br/>
          ОГРН <span>|</span>1024200702965 <br/>
          Юр. адрес <span>|</span> 650000, Кемеровская область, г Кемерово, Советский пр-кт, зд. 32, помещ. 18<br/>
          Директор - Ивченко Валерий Николаевич<br/>
          
        </p>
        <p className={styles.footer_warning__info}>
          Лицензия на осуществление медицинской деятельности: <a href="/docs/Л041-01161-42_00573884.pdf" target="_blanc">Л041-01161-42/00573884 от 12.12.2017</a> <br />
          <a href="/docs/ПППСУ.pdf" target="_blanc" >Правила предоставления услуг</a> <br /> 
          <a href="/docs/ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ.pdf" target="_blanc" >Пользовательское соглашение</a> <br /> 
          <a href="/docs/ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ.pdf" target="_blanc" >Политика конфиденциальности</a> <br /> 
          <a href="/docs/ПОЛИТИКА ОБРАБОТКИ ПД.pdf" target="_blanc" >Политика обработки персональных данных</a> <br /> 
          <a href="/yur-info" target="_blanc">Юридическая информация</a>
        </p>
        Имеются противопоказания, необходима консультация специалиста <br />
        
      </div>
    </section>
  );
}
