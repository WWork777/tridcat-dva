import { VacancyCard } from '@/components/vacancyCard/vacancyCard';
import { vacancies } from '@/data/vacancies.data';
import styles from './styles.module.scss';
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
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Наши вакансии</h1>
      <div className={styles.grid}>
        {vacancies.map((vacancy) => (
          <VacancyCard
            key={vacancy.id}
            id={vacancy.id}
            title={vacancy.title}
            slug={vacancy.slug}
            shortDescription={vacancy.shortDescription}
          />
        ))}
      </div>
    </main>
  );
}