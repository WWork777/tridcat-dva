// app/specialists/page.tsx
import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import styles from "./styles.module.scss";
import { specialistsData } from "@/data/specialists.data";
import TeamGallery from "@/components/specialists/teamGallery/TeamGallery";

export async function generateMetadata() {
  return {
    title: "Стоматологи Кемерово | Тридцать Два",
    description:
      "Стоматологические услуги в Кемерово: лечение кариеса, имплантация зубов, протезирование, отбеливание. Современное оборудование, опытные врачи. Запишитесь на консультацию!",
    alternates: {
      canonical: "https://тридцать-два.рф/specialists",
    },
    openGraph: {
      title: `Стоматологи Кемерово | Тридцать Два`,
      description: `Стоматологические услуги в Кемерово: лечение кариеса, имплантация зубов, протезирование, отбеливание. Современное оборудование, опытные врачи. Запишитесь на консультацию!`,
      url: "https://тридцать-два.рф/specialists",
      siteName: "Стоматология Кемерово",
      images: [
        {
          url: `/about/about.jpg`,
          width: 1200,
          height: 630,
          alt: `Стоматология в Кемерово`,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Стоматологи Кемерово | Тридцать Два",
      description:
        "Современная стоматология в Кемерово: лечение, имплантация, протезирование, отбеливание и детская стоматология. Без боли, по доступным ценам, с гарантией.",
      images: [`/about/about.jpg`],
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

export default function SpecialistsPage() {
  // Передаём в клиентский компонент только нужные поля (без тяжёлых массивов услуг/сертификатов)
  const members = Object.values(specialistsData).map((s) => ({
    id: s.id,
    name: s.name,
    description: s.description,
    stage: s.stage,
    imageLink: s.imageLink,
  }));

  return (
    <section className={`container ${styles.page}`}>
      <BreadCrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Специалисты" }]}
      />

      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Наши специалисты</h1>
        <p className={styles.subtitle}>
          Команда клиники «Тридцать Два» — врачи, ассистенты и администраторы,
          которым можно доверить здоровье вашей улыбки.
        </p>
      </div>

      <TeamGallery members={members} />
    </section>
  );
}
