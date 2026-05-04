"use client"; // Обязательная директива для клиентских компонентов

import styles from "./styles.module.scss";
import Link from "next/link";

export default function ServiceAppointmentButton() {
  const handleClick = () => {
    // Безопасный вызов Яндекс.Метрики только на стороне клиента
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const ym = (window as any).ym;
      if (ym) {
        ym(105543299, "reachGoal", "service");
        // Если вам нужно передать название услуги в метрику:
        // ym(105543299, "reachGoal", "service", { service_name: serviceTitle });
      }
    }
  };

  return (
    <Link
      href="https://booking.medflex.ru/?user=3af5c574ee33a9c585fc8a3ac3d8a9f3&isRoundWidget=true"
      onClick={handleClick}
      className={styles.ctaButton}
    >
      <p>Записаться на прием</p>
    </Link>
  );
}
