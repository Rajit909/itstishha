
import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight, Calendar, User } from "lucide-react";

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <section className="py-20 md:py-32 bg-gradient-to-br from-lightbluebg via-lightgreenbg to-blue-200 animate-fade-in">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold animate-fade-in-up text-darkbg">Our Insights</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Stay informed with the latest trends, analysis, and expert opinions from the Tishha team.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-lightbluebg">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const postImageSrc = PlaceHolderImages.find(p => p.id === post.image)?.imageUrl || post.image;
              const imageHint = PlaceHolderImages.find(p => p.id === post.image)?.imageHint;
              return (
                <div key={post.id} className="animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}}>
                    <Card className="group flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                      {postImageSrc && (
                        <div className="relative h-56 w-full overflow-hidden">
                          <Image
                            src={postImageSrc}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={imageHint || 'blog post'}
                          />
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="text-xl h-14 leading-tight text-darkbg">{post.title}</CardTitle>
                        <div className="text-sm text-muted-foreground pt-2 flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      </CardContent>
                      <CardFooter>
                        <Button variant="link" asChild className="p-0 h-auto">
                          <Link href={`/blog/${post.slug}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
