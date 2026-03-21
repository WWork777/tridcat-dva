import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Prices from "@/components/prices/Prices";
import Contacts from "@/components/common/contacts/contacts";
import StructuredData from '@/components/seo/StructuredData';
import servicesData from '@/data/services.data';
import Promos from "@/components/main-page/promos/promos";

export async function generateMetadata() {
  return {
    title: "Новости Стоматологии | Тридцать Два",
    description:
      "Современная стоматология в Кемерово: лечение, имплантация, протезирование, отбеливание и детская стоматология. Без боли, по доступным ценам, с гарантией.",
    alternates: {
      canonical: "https://тридцать-два.рф/blog",
    },
    openGraph: {
      title: `Стоматология в Кемерово | Тридцать Два`,
      description: `Современная стоматология в Кемерово: лечение, имплантация, протезирование, отбеливание и детская стоматология. Без боли, по доступным ценам, с гарантией.`,
      url: "https://тридцать-два.рф/blog",
      siteName: "Стоматология Кемерово",
      // images: [
      //   {
      //     url: `/about/about.jpg`,
      //     width: 1200,
      //     height: 630,
      //     alt: `Стоматология в Кемерово`,
      //   },
      // ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Стоматология в Кемерово | Тридцать Два",
      description:
        "Современная стоматология в Кемерово: лечение, имплантация, протезирование, отбеливание и детская стоматология. Без боли, по доступным ценам, с гарантией.",
      // images: [`/about/about.jpg`],
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

export default function Blog() {
  return (
    <>
    <StructuredData type="Service" customData={servicesData} />
    
    <section className="container">
        
        <BreadCrumbs
            items={[{ label: "Главная", href: "/" }, { label: "Цены" }]}
        />
        <Promos pricesPage={true}/>
        <h1>Цены на услуги</h1>
        
        <Prices/>
        <Contacts/>
    </section>
    </>
  );
}
