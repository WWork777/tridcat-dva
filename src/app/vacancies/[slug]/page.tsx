import { notFound } from 'next/navigation';
import { vacancies } from '@/data/vacancies.data';
import styles from './styles.module.scss';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { vacancies } = await import('@/data/vacancies.data');
  const vacancy = vacancies.find((v) => v.slug === slug);

  if (!vacancy) {
    return {
      title: 'Вакансия не найдена',
      description: 'Запрошенная вакансия не существует или была удалена.',
    };
  }

  return {
    title: `${vacancy.title} | Стоматология «Тридцать два»`,
    description: vacancy.shortDescription,
    keywords: `вакансия, стоматолог, работа, ${vacancy.title.toLowerCase()}, стоматология`,
    alternates: {
      canonical: `https://тридцать-два.рф/vacancies/${vacancy.slug}`,
    },
    openGraph: {
      title: `Вакансия: ${vacancy.title} | Стоматология «Тридцать два»`,
      description: vacancy.shortDescription,
      type: 'website',
    },
  };
}
interface VacancyDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function VacancyDetailPage({ params }: VacancyDetailPageProps) {
  const { slug } = await params; // дожидаемся Promise
  const vacancy = vacancies.find((v) => v.slug === slug);

  if (!vacancy) {
    notFound();
  }

  const { title, fullContent } = vacancy;

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Что мы ждём от Вас:</h2>
          <ul className={styles.list}>
            {fullContent.requirements.map((item, index) => (
              <li key={index} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Мы предлагаем:</h2>
          <ul className={styles.list}>
            {fullContent.offers.map((item, index) => (
              <li key={index} className={styles.listItem}>{item}</li>
            ))}
          </ul>
        </section>

        {fullContent.note && (
          <p className={styles.note}>{fullContent.note}</p>
        )}
      </div>
    </main>
  );
}