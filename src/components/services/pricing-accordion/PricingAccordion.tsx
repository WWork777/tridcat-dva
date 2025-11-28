// components/services/pricing-accordion/PricingAccordion.tsx
"use client";

import { useState, useRef } from "react";
import styles from "./styles.module.scss";

interface Service {
  features: string[];
  price?: string;
  title?: string;
  name?: string;
}

interface PricingAccordionProps {
  service: Service;
}

export default function PricingAccordion({ service }: PricingAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const visibleFeatures = isExpanded
    ? service.features
    : service.features.slice(0, 3);

  const parseServiceItem = (item: string) => {
    const lastDashIndex = item.lastIndexOf(" - ");
    if (lastDashIndex !== -1) {
      return {
        name: item.substring(0, lastDashIndex).trim(),
        price: item.substring(lastDashIndex + 3).trim(),
      };
    }

    const dashIndex = item.lastIndexOf("-");
    if (dashIndex !== -1) {
      return {
        name: item.substring(0, dashIndex).trim(),
        price: item.substring(dashIndex + 1).trim(),
      };
    }

    return {
      name: item,
      price: "",
    };
  };

  const handleToggle = () => {
    const wasExpanded = isExpanded;

    // Сохраняем позицию перед сворачиванием
    const scrollPosition = window.pageYOffset;

    setIsExpanded(!isExpanded);

    // Если сворачиваем, скроллим наверх секции
    if (wasExpanded && sectionRef.current) {
      requestAnimationFrame(() => {
        const sectionTop = sectionRef.current?.offsetTop || 0;
        const headerHeight = 100; // Высота фиксированного хедера, если есть

        window.scrollTo({
          top: sectionTop - headerHeight,
          behavior: "smooth",
        });
      });
    }
  };

  return (
    <section className={styles.pricingSection} ref={sectionRef}>
      <div className={styles.pricingHeader}>
        <h2>Стоимость услуг</h2>
        <p>{service.name}</p>
      </div>

      <div className={styles.pricingList}>
        {visibleFeatures.map((feature, index) => {
          const { name, price } = parseServiceItem(feature);
          return (
            <div key={index} className={styles.pricingItem}>
              <span className={styles.serviceName}>{name}</span>
              <span className={styles.servicePrice}>{price}</span>
            </div>
          );
        })}
      </div>

      {service.features.length > 8 && (
        <button className={styles.toggleButton} onClick={handleToggle}>
          <span>{isExpanded ? "Свернуть" : `Показать еще`}</span>
        </button>
      )}

      <div className={styles.pricingNote}>
        <p>* Точную стоимость рассчитываем после консультации и осмотра</p>
      </div>
    </section>
  );
}
