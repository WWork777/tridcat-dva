import styles from "./blogComponent.module.scss";
import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Image from "next/image";
import { blogData, Article } from "@/data/blog.data";
import Link from "next/link";

export default function BlogComponent() {
  return (
    <section className="container">
      <BreadCrumbs
        items={[{ label: "Главная", href: "/" }, { label: "Блог" }]}
      />
      <h1>Блог</h1>
      
      <div className={styles.blogGrid}>
        {blogData.map((article: Article) => (
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