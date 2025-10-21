
"use client";

import { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { PlusCircle, MoreHorizontal, Pencil, Trash2, Upload } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import type { BlogPost } from "@/lib/types";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

const formSchema = z.object({
  title: z.string().min(5, "Title must be at least 5 characters."),
  author: z.string().min(2, "Author name must be at least 2 characters."),
  excerpt: z.string().min(10, "Excerpt must be at least 10 characters."),
  content: z.string().min(50, "Content must be at least 50 characters."),
  image: z.string().optional(),
});

type BlogManagementProps = {
  initialData: BlogPost[];
};

export function BlogManagement({ initialData }: BlogManagementProps) {
  const [posts, setPosts] = useState(initialData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: "", author: "", excerpt: "", content: "", image: "" },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setImagePreview(result);
        form.setValue("image", result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleContentFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
        if (file.type === 'application/pdf') {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                form.setValue("content", result);
                toast({ title: "PDF loaded successfully as content." });
            };
            reader.readAsDataURL(file);
        } else {
            toast({ title: "Invalid file type", description: "Please upload a PDF.", variant: "destructive" });
        }
    }
  };


  const handleDialogOpen = (post: BlogPost | null) => {
    setEditingPost(post);
    setImagePreview(null); // Reset preview
    if (post) {
      const postImage = PlaceHolderImages.find(p => p.id === post.image)?.imageUrl || post.image;
      form.reset({ ...post, image: postImage });
      if(postImage && !postImage.startsWith('data:')) {
          setImagePreview(postImage);
      }
    } else {
      form.reset({ title: "", author: "", excerpt: "", content: "", image: "" });
    }
    setIsDialogOpen(true);
  };
  
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEditingPost(null);
    form.reset();
  }

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const imageToSave = values.image || PlaceHolderImages.find(p => p.id === 'blog-post-1')?.imageUrl || '';

    if (editingPost) {
      const updatedPosts = posts.map((p) =>
        p.id === editingPost.id ? { ...p, ...values, image: imageToSave, slug: values.title.toLowerCase().replace(/\s+/g, '-') } : p
      );
      setPosts(updatedPosts);
      toast({ title: "Blog post updated successfully" });
    } else {
      const newPost: BlogPost = {
        ...values,
        id: (posts.length + 1).toString(),
        slug: values.title.toLowerCase().replace(/\s+/g, '-'),
        date: new Date().toISOString().split('T')[0],
        image: imageToSave,
      };
      setPosts([...posts, newPost]);
      toast({ title: "Blog post created successfully" });
    }
    handleDialogClose();
  };

  const handleDelete = (id: string) => {
    setPosts(posts.filter(p => p.id !== id));
    toast({ title: "Blog post deleted successfully", variant: "destructive" });
  };

  return (
    <>
      <div className="flex justify-end mb-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={() => handleDialogOpen(null)}>
              <PlusCircle className="mr-2 h-4 w-4" /> New Post
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-3xl">
             <DialogHeader>
              <DialogTitle>{editingPost ? "Edit Post" : "Create New Post"}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
               <form onSubmit={form.handleSubmit(onSubmit)}>
                <ScrollArea className="max-h-[70vh] p-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <FormField name="title" control={form.control} render={({ field }) => (
                          <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField name="author" control={form.control} render={({ field }) => (
                          <FormItem><FormLabel>Author</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                      <div>
                        <FormField
                          control={form.control}
                          name="image"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Image</FormLabel>
                              <FormControl>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-input px-6 py-10">
                                  <div className="text-center">
                                    {imagePreview || field.value ? (
                                      <div className="relative w-full h-40">
                                        <Image src={imagePreview || field.value || ''} alt="Preview" fill className="object-contain rounded-md" />
                                      </div>
                                    ) : (
                                      <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                                    )}
                                    <div className="mt-4 flex text-sm leading-6 text-muted-foreground">
                                      <label
                                        htmlFor="file-upload"
                                        className="relative cursor-pointer rounded-md bg-background font-semibold text-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 hover:text-primary/80"
                                      >
                                        <span>Upload a file</span>
                                        <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handleImageChange} accept="image/*" />
                                      </label>
                                      <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-muted-foreground">PNG, JPG, GIF up to 10MB</p>
                                  </div>
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <FormField name="excerpt" control={form.control} render={({ field }) => (
                      <FormItem><FormLabel>Excerpt</FormLabel><FormControl><Textarea {...field} /></FormControl><FormMessage /></FormItem>
                    )} />

                    <Tabs defaultValue="html">
                      <TabsList>
                        <TabsTrigger value="html">HTML Content</TabsTrigger>
                        <TabsTrigger value="pdf">Upload PDF</TabsTrigger>
                      </TabsList>
                      <TabsContent value="html">
                        <FormField name="content" control={form.control} render={({ field }) => (
                          <FormItem><FormLabel>Content (HTML supported)</FormLabel><FormControl><Textarea rows={10} {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </TabsContent>
                      <TabsContent value="pdf">
                        <FormItem>
                          <FormLabel>Upload PDF as Content</FormLabel>
                          <FormControl>
                            <Input type="file" onChange={handleContentFileChange} accept="application/pdf" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      </TabsContent>
                    </Tabs>
                  </div>
                </ScrollArea>
                <DialogFooter className="p-6 pt-4">
                    <Button type="button" variant="ghost" onClick={handleDialogClose}>Cancel</Button>
                    <Button type="submit">{editingPost ? "Save Changes" : "Create Post"}</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => {
              const postImage = PlaceHolderImages.find(p => p.id === post.image)?.imageUrl || post.image;
              return (
              <TableRow key={post.id}>
                <TableCell>
                  <Avatar>
                    <AvatarImage src={postImage} alt={post.title} className="object-cover"/>
                    <AvatarFallback>{post.title.charAt(0)}</AvatarFallback>
                  </Avatar>
                </TableCell>
                <TableCell className="font-medium">{post.title}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{new Date(post.date).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleDialogOpen(post)}>
                        <Pencil className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive" onClick={() => handleDelete(post.id)}>
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            )})}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
