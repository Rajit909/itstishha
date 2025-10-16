import { getBlogPosts } from "@/lib/data";
import { BlogManagement } from "./components/blog-management";

export default async function ManageBlogPage() {
  const posts = await getBlogPosts();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Blog Posts</h1>
        <p className="text-muted-foreground mt-2">Create, edit, and manage all articles.</p>
      </div>
      <BlogManagement initialData={posts} />
    </div>
  );
}
