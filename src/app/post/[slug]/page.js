import { posts, getPostBySlug } from "../../lib/posts";
import PostDetailClient from "./PostDetailPage";
import { PostProvider } from "@/app/contexts/PostContext";

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post não encontrado - Treinos em Casa",
      description: "Esse post não existe ou foi removido.",
    };
  }

  return {
    title: `${post.title} - Treinos em Casa`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.coverImage],
    },
  };
}
export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <PostProvider>
      <PostDetailClient slugs={slug} />
    </PostProvider>
  );
}
