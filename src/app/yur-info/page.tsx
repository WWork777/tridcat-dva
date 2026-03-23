import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import styles from "./styles.module.scss";

export async function generateMetadata() {
  return {
    title: "Юридическая информация | Стоматология Тридцать Два",
    description:
      "Сведения о контролирующих органах и страховых медицинских организациях (ОМС и ДМС) клиники «Тридцать Два» в Кемерово.",
    alternates: {
      canonical: "https://тридцать-два.рф/yur-info",
    },
  };
}

export default function YurInfo() {
  return (
    <section className={`container ${styles.yurInfo}`}>
      <BreadCrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Юридическая информация" }]}
      />
      
      <h1 className={styles.title}>Юридическая информация</h1>
      
      <div className={styles.content}>
        {/* Сведения о контролирующих органах */}
        <section className={styles.section}>
          <h2>Сведения о контролирующих органах</h2>
          
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Министерство здравоохранения Кузбасса</h3>
              <div className={styles.infoRow}>
                <strong>Адрес:</strong> <span>650064, г. Кемерово, пр. Советский, 58</span>
              </div>
              <div className={styles.infoRow}>
                <strong>Горячая линия:</strong> <a href="tel:+73842584356">+7 (3842) 58-43-56</a>
              </div>
              <div className={styles.infoRow}>
                <strong>Приемная:</strong> <a href="tel:+73842364284">+7 (3842) 36-42-84</a>
              </div>
              <div className={styles.infoRow}>
                <strong>E-mail:</strong> <a href="mailto:depart@kuzdrav.ru">depart@kuzdrav.ru</a>
              </div>
            </div>

            <div className={styles.card}>
              <h3>Территориальный орган Росздравнадзора по Кемеровской области</h3>
              <div className={styles.infoRow}>
                <strong>Адрес:</strong> <span>650003, г. Кемерово, б-р Строителей, стр. 54 А.</span>
              </div>
              <div className={styles.infoRow}>
                <strong>Телефон:</strong> <a href="tel:+73842780893">8-3842-78-08-93</a>
              </div>
              <div className={styles.infoRow}>
                <strong>E-mail:</strong> <a href="mailto:rznko@reg42.roszdravnadzor.gov.ru">rznko@reg42.roszdravnadzor.gov.ru</a>
              </div>
            </div>

            <div className={styles.card}>
              <h3>Управление Роспотребнадзора по Кемеровской области (территориальный отдел по г. Кемерово)</h3>
              <div className={styles.infoRow}>
                <strong>Адрес:</strong> <span>650002, г. Кемерово, пр. Шахтеров, 20</span>
              </div>
              <div className={styles.infoRow}>
                <strong>Тел./факс:</strong> <a href="tel:+73842641158">(3842) 64-11-58</a>
              </div>
              <div className={styles.infoRow}>
                <strong>E-mail:</strong> <a href="mailto:kemerovo@42.rospotrebnadzor.ru">kemerovo@42.rospotrebnadzor.ru</a>
              </div>
            </div>
          </div>
        </section>

        {/* Сведения о страховых медицинских организациях */}
        <section className={styles.section}>
          <h2>Сведения о страховых медицинских организациях, с которыми заключены договоры на оказание и оплату медицинской помощи по ОМС и ДМС</h2>
          <div className={styles.insuranceBox}>
            <p>Мы работаем со следующими страховыми компаниями и сервисными администраторами ДМС:</p>
            <p className={styles.insuranceList}>
              АО «АльфаСтрахование», САО «ВСК», ООО «Зетта Страхование», СПАО «Ингосстрах», 
              ООО «Капитал Лайф Страхование Жизни», АО «Лучи Страхование», АО «СК «ПАРИ», 
              ООО «ПСБ Страхование», ООО «Регион-Медсервис», АО «Ренессанс Страхование», САО 
              «РЕСО-Гарантия», ПАО СК «Росгосстрах», АО «Совкомбанк Страхование», АО «СОГАЗ», 
              ООО «СК «Согласие», АО «Т-Страхование», АО ГСК «Югория».
            </p>
            <div className={styles.warningBox}>
              Перед визитом уточните в своей страховой компании условия действия полиса в нашей клинике.
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}