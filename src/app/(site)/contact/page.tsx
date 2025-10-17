"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-card">
        <div className="container text-center">
          <h1 className="font-headline text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Have a question or a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-headline text-3xl font-bold">Get in Touch</h2>
                <p className="mt-2 text-muted-foreground">Fill out the form and our team will get back to you within 24 hours.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">(123) 456-7890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">contact@tishha.com</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1" />
                  <span className="text-muted-foreground">123 Tishha Way, Innovation City, 12345</span>
                </div>
              </div>
            </div>
            
            <Card className="p-8 shadow-lg">
                <CardContent className="p-0">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                            <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                            <Input placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                            <Input placeholder="Project Inquiry" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                            <Textarea placeholder="Tell us about your project or question..." rows={5} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    </form>
                </Form>
                </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
