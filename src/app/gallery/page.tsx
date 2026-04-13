import Gallery from "@/components/galleryPage/gallery";

export async function generateMetadata() {
  return {
    title: "Галерея Стоматологии | Тридцать Два",
    description:
      "Фотографии нашей клиники, оборудования и рабочих процессов. Посмотрите, как проходит лечение в стоматологии Тридцать Два в Кемерово.",
    alternates: {
      canonical: "https://тридцать-два.рф/gallery",
    },
    openGraph: {
      title: `Галерея стоматологии Тридцать Два | Кемерово`,
      description: `Фотографии нашей клиники, оборудования и рабочих процессов. Посмотрите, как проходит лечение в стоматологии Тридцать Два в Кемерово.`,
      url: "https://тридцать-два.рф/gallery",
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
      title: "Галерея стоматологии Тридцать Два | Кемерово",
      description:
        "Фотографии нашей клиники, оборудования и рабочих процессов. Посмотрите, как проходит лечение в стоматологии Тридцать Два в Кемерово.",
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

export default function GalleryPage() {
  return (
    <Gallery />
  );
}