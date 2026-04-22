import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { vacancies } from '@/data/vacancies.data';
import styles from './styles.module.scss';
import Contacts from '@/components/common/contacts/contacts';
import Link from 'next/link';
export async function generateMetadata() {
  return {
    title: "Вакансии стоматологии | Тридцать Два",
    description:
      "Работа в современной стоматологии Кемерово. Актуальные вакансии для стоматологов, ассистентов и администраторов. Официальное оформление, гибкий график, обучение.",
    alternates: {
      canonical: "https://тридцать-два.рф/vacancies",
    },
    openGraph: {
      title: "Вакансии стоматологии | Тридцать Два",
      description:
        "Работа в современной стоматологии Кемерово. Актуальные вакансии для стоматологов, ассистентов и администраторов. Официальное оформление, гибкий график, обучение.",
      url: "https://тридцать-два.рф/vacancies",
      siteName: "Стоматология Кемерово",
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Вакансии стоматологии | Тридцать Два",
      description:
        "Работа в современной стоматологии Кемерово. Актуальные вакансии для стоматологов, ассистентов и администраторов. Официальное оформление, гибкий график, обучение.",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
export default function VacanciesPage() {
  return (
    // <main className={styles.container}>
    //   <h1 className={styles.pageTitle}>Наши вакансии</h1>
    //   <div className={styles.grid}>
    //     {vacancies.map((vacancy) => (
    //       <VacancyCard
    //         key={vacancy.id}
    //         id={vacancy.id}
    //         title={vacancy.title}
    //         slug={vacancy.slug}
    //         shortDescription={vacancy.shortDescription}
    //       />
    //     ))}
    //   </div>
    // </main>
       <main className={styles.container}>
      <h1 className={styles.pageTitle}>Наши вакансии</h1>
      <div className={styles.grid}>
        {vacancies.map((vacancy) => (
          <div key={vacancy.id} className={styles.card}>
            <h2 className={styles.title}>{vacancy.title}</h2>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Что мы ждём от Вас:</h3>
              <ul className={styles.list}>
                {vacancy.fullContent.requirements.map((item, index) => (
                  <li key={index} className={styles.listItem}>{item}</li>
                ))}
              </ul>
            </section>
            <section className={styles.section}>
              <h3 className={styles.sectionTitle}>Мы предлагаем:</h3>
              <ul className={styles.list}>
                {vacancy.fullContent.offers.map((item, index) => (
                  <li key={index} className={styles.listItem}>{item}</li>
                ))}
              </ul>
            </section>
            {vacancy.fullContent.note && (
              <p className={styles.note}>{vacancy.fullContent.note}</p>
            )}
            <Link className={styles.link} href={'https://max.ru/u/f9LHodD0cOLWDBJA1W4ItwCfnNzrB4wo5xf0kp49J4zumo-o9tkdWjupGoM'}>
                Связаться с нами
            </Link>
          </div>
        ))}
      </div>
      <Contacts />
    </main>
  );
}