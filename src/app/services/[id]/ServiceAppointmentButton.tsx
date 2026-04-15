"use client";

import React, { useState } from 'react';
import { UniversalModalForm } from "@/components/common/UniversalForm/UniversalModalForm";
import styles from "./styles.module.scss"; 

interface ServiceAppointmentButtonProps {
  serviceTitle: string;
  titleForForm?: string; // Добавляем новый пропс
}

export default function ServiceAppointmentButton({ 
  serviceTitle, 
  titleForForm 
}: ServiceAppointmentButtonProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsFormOpen(true)} className={styles.ctaButton}>
        <p>Записаться на прием</p>
      </button>

      <UniversalModalForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)}
        // Используем titleForForm, а если его нет — стандартную фразу
        title={titleForForm || `Записаться на: ${serviceTitle}`}
        
        // В текст заявки для WhatsApp все равно передаем точное название услуги
        titleInText={`Услуга: ${serviceTitle}`} 
        
        loadingTitle="Подождите, отправляем заявку..."
        goalName="ServiceForm" 
      />
    </>
  );
}