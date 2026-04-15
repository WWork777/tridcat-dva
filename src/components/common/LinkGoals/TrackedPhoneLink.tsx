"use client";

import React from 'react';

interface TrackedPhoneLinkProps {
  phoneNumber: string;       // Номер для ссылки (без пробелов), например: "+73842584356"
  displayNumber?: string;    // Красивый номер для текста, например: "+7 (3842) 58-43-56"
  goalName?: string;         // Название цели (по умолчанию "PhoneClick")
  className?: string;        // CSS-класс, если нужно стилизовать саму ссылку
}

export default function TrackedPhoneLink({
  phoneNumber,
  displayNumber,
  goalName = 'PhoneClick',
  className
}: TrackedPhoneLinkProps) {
  
  const handleClick = () => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ym(105543299, 'reachGoal', goalName);
    }
  };

  return (
    <a 
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className={className}
    >
      {/* Если красивый номер не передали, выводим обычный */}
      {displayNumber || phoneNumber}
    </a>
  );
}