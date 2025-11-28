import styles from "./styles.module.scss";

export default function About() {
  return (
    <section id="about" className="component">
      <div>
        <h2>О клинике</h2>
      </div>
      <div className={styles.about}>
        <div className={styles.about_top}>
          <div className={styles.about_top__image}></div>
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
        {/* <div className={styles.about_bottom}>
          <div className={styles.about_form}>
            <div className={styles.about_form__text}>
              <h3>
                Позаботьтесь <br></br> о здоровье своих зубов <br></br> уже
                сегодня!
              </h3>
              <p>
                Оставьте заявку и наш <br></br> администратор вам перезвонит
              </p>
            </div>
            <form className={styles.about_form__form}>
              <input type="text" placeholder="Ваше имя" />
              <input type="text" placeholder="Ваш телефон" />

              <div className={styles.checkbox_container}>
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">
                  Я согласен на обработку персональных данных
                </label>
              </div>

              <button type="submit">Отправить</button>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  );
}
