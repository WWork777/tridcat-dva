import styles from "./article.module.scss";
import { blogData, Article } from "@/data/blog.data";
import Image from "next/image";
import { notFound } from "next/navigation";
import BreadCrumbs from "@/components/common/breadcrumbs/breadcrumbs";
import Link from "next/link";

interface ArticleComponentProps {
  slug: string;
}

export default function ArticleComponent({ slug }: ArticleComponentProps) {
  const article = blogData.find((item: Article) => item.slug === slug);

  if (!article) {
    notFound();
  }

  // Получаем связанные статьи
  const relatedArticles = article.relatedArticles 
    ? blogData.filter(item => article.relatedArticles!.includes(item.id))
    : [];

  return (
    <section className="container">
      <BreadCrumbs
        items={[
          { label: "Главная", href: "/" },
          { label: "Блог", href: "/blog" },
          { label: article.title },
        ]}
      />
      
      <article className={styles.article}>
        {/* Заголовок статьи */}
        <header className={styles.header}>
          <div className={styles.meta}>
            {article.category && (
              <span className={styles.category}>{article.category}</span>
            )}
            {article.readTime && (
              <span className={styles.readTime}>{article.readTime} мин чтения</span>
            )}
          </div>
          
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.excerpt}>{article.excerpt}</p>
        </header>

        {/* Изображение статьи */}
        {/* <div className={styles.imageWrapper}>
          <Image
            src={article.img}
            alt={article.title}
            width={800}
            height={400}
            className={styles.image}
            priority
          />
        </div> */}

        {/* Основной контент */}
        <div className={styles.content}>
          {/* Введение */}
          <div className={styles.intro}>
            <p>{article.content.intro}</p>
          </div>

          {/* Секции статьи */}
          {article.content.sections.map((section, index) => (
            <section key={index} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
              <p className={styles.sectionContent}>{section.content}</p>
              
              {section.list && (
                <ul className={styles.sectionList}>
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {/* Заключение */}
          <div className={styles.conclusion}>
            <p>{article.content.conclusion}</p>
          </div>

          {/* Блок автора */}
          <div className={styles.author}>
            <div className={styles.authorInfo}>
              <Image
                src={article.author.avatar}
                alt={article.author.name}
                width={80}
                height={80}
                className={styles.authorAvatar}
              />
              <div className={styles.authorDetails}>
                <h3 className={styles.authorName}>{article.author.name}</h3>
                <p className={styles.authorPosition}>{article.author.position}</p>
              </div>
            </div>
          </div>

          {/* CTA блок */}
          <div className={styles.cta}>
            <h3>Записаться на консультацию</h3>
            <p>Не откладывайте здоровье своих зубов на потом! Наши специалисты готовы помочь вам уже сегодня.</p>
            <button className={styles.ctaButton} ><a href="https://wa.me/79029830005?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BF%D1%80%D0%B8%D0%B5%D0%BC">Записаться онлайн</a></button>
          </div>
        </div>

        {/* Подвал статьи */}
        <footer className={styles.footer}>
          {/* Теги */}
          <div className={styles.tags}>
            <span className={styles.tagsLabel}>Теги:</span>
            {article.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>#{tag}</span>
            ))}
          </div>

          {/* Связанные статьи */}
          {relatedArticles.length > 0 && (
            <div className={styles.related}>
              <h3 className={styles.relatedTitle}>Читайте также</h3>
              <div className={styles.relatedGrid}>
                {relatedArticles.map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.id} 
                    href={`/blog/${relatedArticle.slug}`}
                    className={styles.relatedCard}
                  >
                    <h4 className={styles.relatedCardTitle}>{relatedArticle.title}</h4>
                    <p className={styles.relatedCardExcerpt}>{relatedArticle.excerpt}</p>
                    <span className={styles.relatedCardLink}>Читать →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </footer>
      </article>
    </section>
  );
}