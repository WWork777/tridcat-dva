// src/components/seo/StructuredData.tsx
import servicesData from '@/data/services.data';

interface StructuredDataProps {
  type?: 'Dentist' | 'Service';
  customData?: any;
}

export default function StructuredData({ type = 'Dentist', customData }: StructuredDataProps) {
  // 1. Разметка для Организации (Клиники)
  if (type === 'Dentist') {
    const data = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Тридцать два",
      "image": "https://xn----7sbbhhcy7dre6b9d.xn--p1ai/logo/logo.svg",
      "telephone": "+7(3842) 33 00 05",
      "url": "https://xn----7sbbhhcy7dre6b9d.xn--p1ai/",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Советский проспект, 32, 2 этаж",
        "addressLocality": "Кемерово",
        "postalCode": "650000",
        "addressCountry": "RU"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "20:00"
      },
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    );
  }

  // 2. Разметка для Услуг (Генерируется из вашего файла services.data.ts)
  if (type === 'Service' && customData) {
    const servicesList = Object.values(customData)
      .filter((service: any) => service.ownPage === true && service.price)
      .map((service: any) => ({
        "@type": "Service",
        "serviceType": service.title || service.name,
        "description": service.description,
        "provider": {
          "@type": "Dentist",
          "name": "Тридцать два"
        },
        "offers": {
          "@type": "Offer",
          "price": service.price.replace(/\D/g, ''), // Удаляем нецифровые символы для цены
          "priceCurrency": "RUB",
          "availability": "https://schema.org/InStock"
        }
      }));

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": servicesList
        }) }}
      />
    );
  }

  return null;
}