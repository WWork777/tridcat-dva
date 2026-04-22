import Link from 'next/link';
import styles from './styles.module.scss';

interface VacancyCardProps {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
}

export const VacancyCard = ({ slug, title, shortDescription }: VacancyCardProps) => {
  return (
    <Link href={`/vacancies/${slug}`} className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{shortDescription}</p>
      <span className={styles.link}>Подробнее →</span>
    </Link>
  );
};