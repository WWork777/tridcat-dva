import HeroBlock from "@/components/common/hero-block/hero-block";
import About from "@/components/main-page/about/about";
import Specialists from "@/components/main-page/specialists-slider/specialists-slider";
import Services from "@/components/main-page/services/services";
import Sales from "@/components/main-page/sales/sales-slider";
import BlogSlider from "@/components/main-page/blog-slider/blog-slider";
import RewievsSlider from "@/components/main-page/rewievs-slider/rewievs-slider";
import Contacts from "@/components/common/contacts/contacts";

export async function generateMetadata() {
  return {
    title: "Стоматология в Кемерово | Тридцать Два",
    description:
      "Современная стоматология в Кемерово: лечение, имплантация, протезирование, отбеливание и детская стоматология. Без боли, по доступным ценам, с гарантией.",
    alternates: {
      canonical: "https://тридцать-два.рф",
    },
    openGraph: {
      title: `Стоматология в Кемерово | Тридцать Два`,
      description: `Современная стоматология в Кемерово: лечение, имплантация, протезирование, отбеливание и детская стоматология. Без боли, по доступным ценам, с гарантией.`,
      url: "https://тридцать-два.рф",
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
      title: "Стоматология в Кемерово | Тридцать Два",
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

export default function Home() {
  return (
    <>
      <HeroBlock />
      <section className="container">
        <About />
        <Services />
        <Specialists />
        {/* <Sales /> */}
        {/* <BlogSlider />  */}
        <RewievsSlider />
        <Contacts />
      </section>
    </>
  );
}
