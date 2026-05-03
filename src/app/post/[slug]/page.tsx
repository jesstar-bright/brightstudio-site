import { notFound } from "next/navigation";
import { posts } from "../posts";
import { HeroTemplate } from "../templates/hero";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return {
    title: post ? `Post: ${post.slug} — Bright Studio` : "Post not found",
    robots: { index: false, follow: false },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  switch (post.template) {
    case "hero":
      return <HeroTemplate post={post} />;
  }
}
