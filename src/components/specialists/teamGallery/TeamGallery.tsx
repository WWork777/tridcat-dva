import Link from "next/link";
import styles from "./TeamGallery.module.scss";

interface TeamMember {
  id: string;
  name: string;
  description: string;
  stage?: string;
  imageLink: string;
}

// Паттерн соотношений сторон для «живой», асимметричной галерейной раскладки.
// Карточки получают разную высоту, благодаря чему колонки складываются мозаикой.
const ASPECTS = ["3 / 4", "2 / 3", "4 / 5", "2 / 3", "3 / 4", "5 / 7"];

export default function TeamGallery({ members }: { members: TeamMember[] }) {
  return (
    <div className={styles.gallery}>
      {members.map((m, i) => (
        <Link
          key={m.id}
          href={`/specialists/${m.id}`}
          className={styles.card}
          style={{ ["--ratio" as string]: ASPECTS[i % ASPECTS.length] }}
        >
          <div className={styles.imageWrap}>
            <img
              src={m.imageLink}
              alt={m.name}
              loading="lazy"
              className={styles.image}
            />
            <div className={styles.gradient} />

            {m.stage && (
              <span className={styles.badge}>Стаж: {m.stage}</span>
            )}

            <div className={styles.caption}>
              <h3 className={styles.name}>{m.name}</h3>
              <p className={styles.role}>{m.description}</p>
              <span className={styles.more}>Подробнее →</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
