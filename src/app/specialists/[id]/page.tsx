import { notFound } from "next/navigation";
import Link from "next/link";
import styles from "./styles.module.scss";
import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import { specialistsData } from "@/data/specialists.data";
import servicesData from "@/data/services.data";
import CasesAccordion from "@/components/specialists/cases/cases";
import CertificatesSwiper from "@/components/specialists/certificatesSlider/certificatesSlider";
import ServicesAccordion from "@/components/specialists/servicesAccordion/servicesAccordion";
import Specialists from "@/components/main-page/specialists-slider/specialists-slider";

interface SpecialistPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SpecialistPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const specialist = specialistsData[id];

  if (!specialist) {
    notFound();
  }

  // Получаем услуги специалиста
  const specialistServices = specialist.services
    ? specialist.services.map(serviceId => servicesData[serviceId]).filter(Boolean)
    : [];

  const whatsappMessage = `Здравствуйте, хочу записаться к специалисту ${specialist.name}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);

  const hasServices = specialistServices.length > 0;
  const hasEducation = specialist.education && specialist.education.length > 0;
  const hasCertifications = specialist.certifications && specialist.certifications.length > 0;
  const hasSpecializations = specialist.specializations && specialist.specializations.length > 0;
  const hasDetailedDescription = specialist.detailedDescription;
  const hasCases = specialist.cases && specialist.cases.length > 0;

  return (
    <div className="container">
      {/* Хлебные крошки */}
      <BreadCrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Специалисты", href: "/specialists" },
          { label: `${specialist.name}`, href: `/specialists/${specialist.id}` },
        ]}
      />

      {/* Основная информация о специалисте */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.specialistInfo}>
            <h1>{specialist.name}</h1>
            <p className={styles.specialistDescription}>{specialist.description}</p>
            
            {specialist.stage && (
              <div className={styles.stage}>
                <span className={styles.stageLabel}>Стаж работы:</span>
                <span className={styles.stageValue}>{specialist.stage}</span>
              </div>
            )}

            { id === "ivchenko-valerij-nikolaevich" && (
              <div className={styles.detailedDescription}>
                <p>Клиника «Тридцать два» это в первую очередь, медицинская организация...и только в третью коммерческая</p>
                
                <ul>
                  <li><em>Мы не даем рекламы, не обучаем врачей навыкам продаж, маркетинг не важное для нас понятие.</em></li>
                  <li><em>Мы работаем строго по медицинским протоколам, что максимально позволяет избежать осложнений.</em></li>
                </ul>

                <p>Мы не используем ультрасовременные технологии, которые вышли на рынок «вчера», и не проводим опытов над теми, кто доверил нам свое здоровье, а применяем только проверенные временем технологии с известными отдаленными результатами.</p>

                <p>Для нас очень дорога наша репутация, это самое важное и ценное что есть у нас, и мы ее всячески оберегаем и приумножаем!</p>

                <p>Принципы подбора персонала в «Тридцать два»</p>

                <ul>
                  <li><em>влюбленность в свою профессию</em></li>
                  <li><em>порядочность</em></li>
                  <li><em>стремление к профессиональному росту</em></li>
                  <li><em>нормальное отношение к деньгам (деньги важное, но не главное)</em></li>
                </ul>

                <p>Работа в команде, специалистов всех профилей, позволяет нам максимально точно оценить и решить проблему каждого пациента.</p>
              </div>
            )
            }
            
            {hasDetailedDescription && (
              <div className={styles.detailedDescription}>
                <p>{specialist.detailedDescription}</p>
              </div>
            )}

            <div className={styles.buttons_container}>
              {specialist.waLink ? (
                <Link
                  href={specialist.waLink}
                  className={styles.wa_button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Написать в WhatsApp</p>
                </Link>
              ) : (
                <Link
                  href={`https://wa.me/79029830005?text=${encodedMessage}`}
                  className={styles.wa_button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Написать в WhatsApp</p>
                </Link>
              )}
              
              <Link href="tel:+7 902 983 0005" className={styles.ctaButton}>
                <p>Записаться на прием</p>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img 
            src={specialist.imageLink} 
            alt={specialist.name}
          />
        </div>
      </section>

      {/* Образование и специализации */}
      {(hasEducation || hasSpecializations) && (
        <section className={styles.educationSection}>
          <div className={styles.educationGrid}>
            {hasEducation && (
              <div className={styles.educationBlock}>
                <h2>Образование</h2>
                <div className={styles.educationList}>
                  {specialist.education!.map((item, index) => (
                    <div key={index} className={styles.educationItem}>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {hasSpecializations && (
              <div className={styles.specializationsBlock}>
                <h2>Специализации</h2>
                <div className={styles.specializationsList}>
                  {specialist.specializations!.map((item, index) => (
                    <div key={index} className={styles.specializationItem}>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Кейсы "до/после" */}
      {hasCases && (
        <section className={styles.certificatesSection}>
          <h2>Работы до/после</h2>
          <CasesAccordion cases={specialist.cases!} />
        </section>
      )}

      {/* Сертификаты */}
      {hasCertifications && (
        <section className={styles.certificatesSection}>
          <h2>Сертификаты</h2>
          <CertificatesSwiper certificates={specialist.certifications!} />
        </section>
      )}

      {/* Услуги специалиста */}
      {hasServices && (
        <section className={styles.servicesSection}>
          <h2>Услуги специалиста</h2>
          <ServicesAccordion services={specialistServices} />
        </section>
      )}

      {/* Другие специалисты */}
      <Specialists title="Другие специалисты" excludeId={specialist.id}/>
    </div>
  );
}

export async function generateStaticParams() {
  return Object.keys(specialistsData).map((id) => ({
    id: id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const specialist = specialistsData[id];

  if (!specialist) {
    return {
      title: "Специалист не найден - Стоматология в Кемерово",
    };
  }

  return {
    title: `${specialist.name} - ${specialist.description} в Кемерово`,
    description: `Записаться на прием к ${specialist.name} - ${specialist.description}. Стаж работы ${specialist.stage || 'более 5 лет'}. Современные методы лечения.`,
    alternates: {
      canonical: `https://тридцать-два.рф/specialists/${specialist.id}`,
    },
    openGraph: {
      title: `${specialist.name} - ${specialist.description}`,
      description: `Профессиональный стоматолог в Кемерово. Стаж работы ${specialist.stage || 'более 5 лет'}.`,
      url: `https://тридцать-два.рф/specialists/${specialist.id}`,
      siteName: "Стоматология Кемерово",
      images: [
        {
          url: specialist.imageLink || `/specialists/default.jpg`,
          width: 1200,
          height: 630,
          alt: specialist.name,
        },
      ],
      locale: "ru_RU",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: `${specialist.name} - Стоматология в Кемерово`,
      description: `${specialist.description}. Стаж работы ${specialist.stage || 'более 5 лет'}.`,
      images: [specialist.imageLink || `/specialists/default.jpg`],
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