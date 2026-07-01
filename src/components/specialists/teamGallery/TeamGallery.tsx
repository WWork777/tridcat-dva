"use client";

import { Fragment, useMemo, useState } from "react";
import Link from "next/link";
import styles from "./TeamGallery.module.scss";

interface TeamMember {
  id: string;
  name: string;
  description: string;
  stage?: string;
  imageLink: string;
}

type MasonryGroup = "staff" | "assistant" | "admin";
type Group = "leader" | MasonryGroup;

// Соотношения сторон для «живой», асимметричной раскладки миниатюр.
const ASPECTS = ["3 / 4", "4 / 5", "1 / 1", "4 / 5", "3 / 4", "5 / 6"];

// Декоративные фразы и «пропуски» ниже заданы ЛОКАЛЬНЫМИ индексами —
// внутри своей группы (врачи / ассистенты / администраторы), а не
// внутри общего списка. Иначе при column-count раскладке браузер мог
// раскидать людей одной группы по разным колонкам вперемешку с другой.
const GROUP_QUOTES: Partial<Record<MasonryGroup, Record<number, string>>> = {
  staff: {
    1: "Мы верим, что красивая, здоровая улыбка может изменить жизнь!",
    6: "Наша работа — это наша страсть!",
  },
};

const GROUP_SPACERS: Partial<Record<MasonryGroup, Record<number, number>>> = {
  staff: { 0: 80, 4: 130, 9: 70, 12: 150 },
  assistant: { 4: 90, 9: 120 },
  admin: { 3: 80 },
};

const MASONRY_GROUP_ORDER: MasonryGroup[] = ["staff", "assistant", "admin"];

// Глав. врач и директор — руководство клиники, выводятся отдельным рядом
// из 2 карточек (всегда рядом на десктопе), а не общей мозаикой.
function classify(description: string): Group {
  if (/ассистент/i.test(description)) return "assistant";
  if (/администратор/i.test(description)) return "admin";
  if (/главный врач/i.test(description) || /^директор$/i.test(description.trim())) {
    return "leader";
  }
  return "staff";
}

export default function TeamGallery({ members }: { members: TeamMember[] }) {
  const [active, setActive] = useState(0);
  const featured = members[active] ?? members[0];

  // Делим общий список на группы, сохраняя порядок из specialists.data.ts:
  // глав. врач → директор → врачи → ассистенты → администраторы.
  const groups = useMemo(() => {
    const buckets: Record<Group, { member: TeamMember; globalIndex: number }[]> = {
      leader: [],
      staff: [],
      assistant: [],
      admin: [],
    };
    members.forEach((member, globalIndex) => {
      buckets[classify(member.description)].push({ member, globalIndex });
    });
    return buckets;
  }, [members]);

  return (
    <div className={styles.layout}>
      <div className={styles.galleryGroups}>
        {/* Руководство — фиксированный ряд из 2 карточек, всегда рядом на десктопе */}
        {groups.leader.length > 0 && (
          <div className={styles.leaders}>
            {groups.leader.map(({ member: m, globalIndex: i }) => (
              <Link
                key={m.id}
                href={`/specialists/${m.id}`}
                className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
                style={{ ["--ratio" as string]: "4 / 5" }}
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
            ))}
          </div>
        )}

        {/* Мозаичные блоки по группам — врачи / ассистенты / администраторы */}
        {MASONRY_GROUP_ORDER.map((groupKey) => {
          const items = groups[groupKey];
          if (items.length === 0) return null;
          const quotes = GROUP_QUOTES[groupKey] ?? {};
          const spacers = GROUP_SPACERS[groupKey] ?? {};

          return (
            <div className={styles.gallery} key={groupKey}>
              {items.map(({ member: m, globalIndex: i }, localIndex) => (
                <Fragment key={m.id}>
                  {spacers[localIndex] && (
                    <div
                      className={styles.spacer}
                      style={{ height: spacers[localIndex] }}
                    />
                  )}
                  {quotes[localIndex] && (
                    <div className={styles.quote}>
                      <span className={styles.quoteIcon}>✤</span>
                      <p>{quotes[localIndex]}</p>
                    </div>
                  )}
                  <Link
                    href={`/specialists/${m.id}`}
                    className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
                    style={{ ["--ratio" as string]: ASPECTS[localIndex % ASPECTS.length] }}
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
          );
        })}
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
