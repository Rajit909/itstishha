
import { getBlogPostBySlug, getBlogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Calendar, User } from "lucide-react";

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params: { slug } }: BlogPostPageProps) {
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postImage = PlaceHolderImages.find(p => p.id === post.image)?.imageUrl || post.image;
  const imageHint = PlaceHolderImages.find(p => p.id === post.image)?.imageHint;

  const isPdf = post.content.startsWith('data:application/pdf;base64,');

  return (
    <article className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <header className="mb-12 text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            {post.title}
          </h1>
          <div className="mt-4 flex justify-center items-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
          </div>
        </header>

        {postImage && (
          <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden shadow-lg mb-12">
            <Image
              src={postImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              data-ai-hint={imageHint || 'blog post'}
            />
          </div>
        )}

        {isPdf ? (
          <div className="aspect-video">
            <iframe src={post.content} className="w-full h-full" title={post.title} />
          </div>
        ) : (
          <div
            className="prose dark:prose-invert lg:prose-xl max-w-none mx-auto"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        )}
      </div>
    </article>
  );
}
