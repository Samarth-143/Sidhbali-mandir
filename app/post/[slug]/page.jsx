import PostContent from "@/components/pages/PostContent";
import { posts, getPost } from "@/data/posts";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }) {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found — Shri Sidhbali Baba Dham" };
  return {
    title: `${post.title.hi} | ${post.title.en} — Shri Sidhbali Baba Dham`,
    description: post.excerpt.en,
  };
}

export default function PostPage({ params }) {
  return <PostContent slug={params.slug} />;
}
