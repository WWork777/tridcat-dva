import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";
import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import servicesData from "@/data/services.data";
import SpecialistsService from "@/components/specialists/specialistsSlider/specialists-slider";
import PricingAccordion from "@/components/services/pricing-accordion/PricingAccordion";
import { specialistsData } from "@/data/specialists.data";

// interface ServicePageProps {
//   params: {
//     id: string;
//   };
// }

// Исправляем компонент - params должен быть Promise
export default async function ServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // Распаковываем params с помощью await
  const { id } = await params;
  const service = servicesData[id];

  if (!service) {
    notFound();
  }

  // Защита от отсутствующего поля services
  const serviceSpecialists = Object.values(specialistsData).filter(
    (specialist) =>
      specialist.services &&
      Array.isArray(specialist.services) &&
      specialist.services.includes(id)
  );

  const whatsappMessage = `Здравствуйте, хочу записаться на ${service.title}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);

  const hasFeatures = service.features && service.features.length > 0;

  return (
    <div className="container">
      {/* Хлебные крошки */}
      <BreadCrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Услуги", href: "/services" },
          { label: `${service.title}`, href: `/services/${service.id}` },
        ]}
      />

      {/* Заголовок страницы */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>{service.title}</h1>
          {service.imageLink && (
            <div className={styles.heroImageMobile}>
              <img src={service.imageLink} alt={service.title} />
            </div>
          )}
          <p className={styles.heroDescription}>{service.fullDescription}</p>
          <div className={styles.buttons_container}>
            <Link
              href={`https://t.me/+79029830005?text=${encodedMessage}`}
              className={styles.wa_button}
            >
              <p>Telegram</p>
            </Link>
            <Link href="tel:+7 902 983 0005" className={styles.ctaButton}>
              <p>Записаться на прием</p>
            </Link>
          </div>
        </div>
        {service.imageLink && (
          <div className={styles.heroImage}>
            <img src={service.imageLink} alt={service.title} />
          </div>
        )}
      </section>

      {hasFeatures && (
        <PricingAccordion
          service={{
            ...service,
            features: service.features || [], // Добавить fallback
          }}
        />
      )}
      <SpecialistsService specialists={serviceSpecialists} />
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((id) => ({
    id: id,
  }));
}

// Исправляем generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesData[id];

  if (!service) {
    return {
      title: "Услуга не найдена - Стоматология в Кемерово",
    };
  }

  return {
    title: `${service.title} в Кемерово`,
    description: service.description,
    alternates: {
      canonical: `https://тридцать-два.рф/services/${service.id}`,
    },
    openGraph: {
      title: `${service.title} в Кемерово`,
      description: service.description,
      url: `https://тридцать-два.рф/services/${service.id}`,
      siteName: "Стоматология Кемерово",
      images: [
        {
          url: service.imageLink || `/about/about.jpg`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "ru_RU",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - Стоматология в Кемерово`,
      description: service.description,
      images: [service.imageLink || `/about/about.jpg`],
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
