"use client";

import React from 'react';

interface TrackedLink {
  link?: string;
  goalName?: string;
  className?: string; 
  text?: string;
}

export default function TrackedLink({
  link,
  goalName,
  className,
  text
}: TrackedLink) {
  
  const handleClick = () => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ym(105543299, 'reachGoal', goalName);
    }
  };

  return (
    <a 
      href={link}
      onClick={handleClick}
      className={className}
    >
      {/* Если красивый номер не передали, выводим обычный */}
      <p>{text}</p>
    </a>
  );
}