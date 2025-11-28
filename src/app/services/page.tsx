import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import styles from "./styles.module.scss";
import { ServiceCard } from "@/components/main-page/services/services";
import ServiceList from "@/components/services/serviceList/serviceList";
import BlogSlider from "@/components/main-page/blog-slider/blog-slider";
import Sales from "@/components/main-page/sales/sales-slider";
import Contacts from "@/components/common/contacts/contacts";

export async function generateMetadata() {
  return {
    title: "Стоматология в Кемерово - Лечение зубов, имплантация, отбеливание",
    description:
      "Стоматологические услуги в Кемерово: лечение кариеса, имплантация зубов, протезирование, отбеливание. Современное оборудование, опытные врачи. Запишитесь на консультацию!",
    alternates: {
      canonical: "https://тридцать-два.рф/services",
    },
    openGraph: {
      title: `Стоматология в Кемерово - Лечение зубов, имплантация, отбеливание`,
      description: `Стоматологические услуги в Кемерово: лечение кариеса, имплантация зубов, протезирование, отбеливание. Современное оборудование, опытные врачи. Запишитесь на консультацию!`,
      url: "https://тридцать-два.рф/services",
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
      title:
        "Стоматология в Кемерово - Лечение зубов, имплантация, отбеливание",
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

export default function Services() {
  return (
    <section className="container">
      <BreadCrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Услуги" }]}
      />
      <h1>Наши услуги</h1>
      <ServiceList />
      <BlogSlider />
      <Contacts />
    </section>
  );
}
