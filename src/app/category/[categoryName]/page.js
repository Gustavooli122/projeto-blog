import { posts } from "../../lib/posts";
import CategoryPageClient from "./CategoryPage";
import { PostProvider } from "@/app/contexts/PostContext";

import { slugify } from "../../lib/posts";

export async function generateStaticParams() {
  const categories = [...new Set(posts.map((p) => p.category))];

  return categories.map((category) => ({
    categoryName: slugify(category),
  }));
}

export async function generateMetadata({ params }) {
  const { categoryName } = params;

  return {
    title: `${categoryName} - Treinos em Casa`,
    description: `Artigos e treinos sobre ${categoryName} para você fazer em casa.`,
    openGraph: {
      title: `${categoryName} - Treinos em Casa`,
      description: `Conteúdos sobre ${categoryName}.`,
    },
  };
}

export default async function Page({ params }) {
  const { categoryName } = await params;

  return (
    <PostProvider>
      <CategoryPageClient categoryName={categoryName} />
    </PostProvider>
  );
}
