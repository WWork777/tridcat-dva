"use client"; // Это клиентский компонент!

import React, { useState } from 'react';
import { UniversalModalForm } from "@/components/common/UniversalForm/UniversalModalForm";
// Подставьте правильный путь до ваших стилей
import styles from "./styles.module.scss"; 

interface AppointmentButtonProps {
  specialistName: string;
}

export default function AppointmentButton({ specialistName }: AppointmentButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Кнопка, которая открывает модалку (заменяем ваш старый Link на tel:) */}
      <button onClick={() => setIsFormOpen(true)} className={styles.ctaButton}>
        <p>Записаться на прием</p>
      </button>

      {/* Сама модалка */}
      <UniversalModalForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        title={`Запись на прием к врачу: ${specialistName}`}
        titleInText={`Запись к врачу: ${specialistName}`}
        loadingTitle="Подождите, отправляем заявку..."
        goalName="SpecialistForm" 
      />
    </>
  );
}