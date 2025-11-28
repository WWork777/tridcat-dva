// app/specialists/page.tsx
import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import styles from "./styles.module.scss";
import { specialistsData } from "@/data/specialists.data";
import { SliderCard } from "@/components/main-page/specialists-slider/specialists-slider";

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
  const allSpecialists = Object.values(specialistsData);

  return (
    <section className="container">
      <BreadCrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Специалисты" }]}
      />

      <div className={styles.pageHeader}>
        <h1 className={styles.title}>Наши специалисты</h1>
      </div>

      <div className={styles.specialistsGrid}>
        {allSpecialists.map((specialist) => (
          <div key={specialist.id} className={styles.specialistItem}>
              <SliderCard
                img={specialist.imageLink}
                name={specialist.name}
                description={specialist.description}
                stage={specialist.stage}
                showStage={!!specialist.stage}
                link={`/specialists/${specialist.id}`}
                showWhatsApp={true} // Включаем WhatsApp
                waLink={specialist.waLink} // Передаем WhatsApp ссылку
              />
            
          </div>
        ))}
      </div>
    </section>
  );
}
