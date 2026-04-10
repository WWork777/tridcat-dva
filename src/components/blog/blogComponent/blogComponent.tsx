import { useMemo } from "react";
import styles from "./blogComponent.module.scss";
import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Image from "next/image";
import { blogData, Article } from "@/data/blog.data";
import Link from "next/link";

export default function BlogComponent() {
  // Сортировка статей согласно ТЗ: сначала Имплантация, затем Протезирование, остальные по дате
  const sortedArticles = useMemo(() => {
    const categoryPriority: Record<string, number> = {
      "Имплантация": 1,
      "Протезирование": 2,
      "Ортопедия": 2, // На случай, если в будущем встретится такое название
    };

    return [...blogData].sort((a, b) => {
      const pA = categoryPriority[a.category || ""] ?? 3;
      const pB = categoryPriority[b.category || ""] ?? 3;

      // 1. Сортируем по приоритету категории
      if (pA !== pB) return pA - pB;

      // 2. Если приоритет одинаковый, сортируем по дате (сначала новые)
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, []);

  return (
    <section className="container">
      <BreadCrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Блог" }]}
      />
      <h1>Блог</h1>
      
      <div className={styles.blogGrid}>
        {sortedArticles.map((article: Article) => (
          <Link 
            key={article.id} 
            href={`/blog/${article.slug}`}
            className={styles.blogCard}
          >
            {/* <Image 
              src={article.img} 
              alt={article.title}
              width={400}
              height={220}
              className={styles.cardImage}
            /> */}
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                {article.category && (
                  <span className={styles.cardCategory}>{article.category}</span>
                )}
                {article.readTime && (
                  <span className={styles.cardReadTime}>{article.readTime} мин чтения</span>
                )}
              </div>
              
              <h2 className={styles.cardTitle}>{article.title}</h2>
              <p className={styles.cardExcerpt}>{article.excerpt}</p>
              
              <div className={styles.cardFooter}>
                <span className={styles.readMore}>Читать статью →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}