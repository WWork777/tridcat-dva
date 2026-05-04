"use client"; // Это клиентский компонент!

import React, { useState } from "react";
import { UniversalModalForm } from "@/components/common/UniversalForm/UniversalModalForm";
// Подставьте правильный путь до ваших стилей
import styles from "./styles.module.scss";
import Link from "next/link";

interface AppointmentButtonProps {
  specialistName: string;
  formLink: string;
}

export default function AppointmentButton() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Кнопка, которая открывает модалку (заменяем ваш старый Link на tel:) */}
      <Link
        href="https://booking.medflex.ru/?user=3af5c574ee33a9c585fc8a3ac3d8a9f3&isRoundWidget=true&type=doctors&filial=12864"
        className={styles.ctaButton}
        onClick={() => {
          if (typeof window !== "undefined") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).ym(105543299, "reachGoal", "Specialist");
          }
        }}
      >
        <p>Записаться на прием</p>
      </Link>
    </>
  );
}
