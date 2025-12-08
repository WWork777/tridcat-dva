import ArticleComponent from '@/components/blog/article/article';

// interface BlogPageProps {
//   params: {
//     slug: string;
//   };
// }

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ArticleComponent slug={slug} />;
}

// Метаданные для SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { blogData } = await import('@/data/blog.data');
  const article = blogData.find((item) => item.slug === slug);

  if (!article) {
    return {
      title: 'Статья не найдена',
    };
  }

  return {
    title: `${article.title} | Стоматология «Тридцать два»`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    alternates: {
      canonical: `https://тридцать-два.рф/blog/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      // images: [
      //   {
      //     url: article.img,
      //     width: 800,
      //     height: 400,
      //     alt: article.title,
      //   },
      // ],
      type: 'article',
      publishedTime: article.date,
      authors: [article.author.name],
    },
  };
}
