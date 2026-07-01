"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import styles from "./TeamGallery.module.scss";

interface TeamMember {
  id: string;
  name: string;
  description: string;
  stage?: string;
  imageLink: string;
}

// Соотношения сторон для «живой», асимметричной раскладки миниатюр.
const ASPECTS = ["3 / 4", "4 / 5", "1 / 1", "4 / 5", "3 / 4", "5 / 6"];

// Декоративные фразы клиники, вплетённые в галерею (как в референсе).
const QUOTES: Record<number, string> = {
  3: "Мы верим, что красивая, здоровая улыбка может изменить жизнь!",
  8: "Наша работа — это наша страсть!",
};

// Пустые «пропуски» (высота в px) — намеренно скипаем места в строках,
// чтобы раскладка была воздушной и асимметричной, как в референсе.
const SPACERS: Record<number, number> = {
  // 2: 80,
  // 6: 130,
  // 11: 70,
  // 14: 150,
  // 19: 90,
  // 24: 120,
  // 29: 80,
};

export default function TeamGallery({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState(0);
  const featured = members[active] ?? members[0];

  return (
    <div className={styles.layout}>
      {/* Левая зона — мозаичная галерея миниатюр */}
      <div className={styles.gallery}>
        {members.map((m, i) => (
          <Fragment key={m.id}>
            {SPACERS[i] && (
              <div className={styles.spacer} style={{ height: SPACERS[i] }} />
            )}
            {QUOTES[i] && (
              <div className={styles.quote}>
                <span className={styles.quoteIcon}>✤</span>
                <p>{QUOTES[i]}</p>
              </div>
            )}
            <Link
              href={`/specialists/${m.id}`}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
              style={{ ["--ratio" as string]: ASPECTS[i % ASPECTS.length] }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <div className={styles.thumbImageWrap}>
                <img src={m.imageLink} alt={m.name} loading="lazy" />
              </div>
              <div className={styles.thumbCaption}>
                <span className={styles.thumbName}>{m.name}</span>
                <span className={styles.thumbRole}>{m.description}</span>
              </div>
            </Link>
          </Fragment>
        ))}
      </div>

      {/* Правая зона — большое «прилипающее» фото выбранного специалиста */}
      <div className={styles.featuredCol}>
        <Link
          href={`/specialists/${featured.id}`}
          className={styles.featured}
          aria-label={featured.name}
        >
          <div className={styles.featuredImageWrap}>
            <img
              key={featured.id}
              src={featured.imageLink}
              alt={featured.name}
              className={styles.featuredImage}
            />
          </div>
          <div key={`card-${featured.id}`} className={styles.featuredCard}>
            {featured.stage && (
              <span className={styles.featuredBadge}>Стаж: {featured.stage}</span>
            )}
            <h3 className={styles.featuredName}>{featured.name}</h3>
            <p className={styles.featuredRole}>{featured.description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
