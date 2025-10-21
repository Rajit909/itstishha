"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().min(10, { message: "Please enter a valid phone number." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function HeroSection() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
          title: "Consultation Request Sent!",
          description: "Thank you for your interest. We will be in touch shortly.",
        });
        form.reset();
      }

  const services = [
    "Feasibility Study",
    "Architectural Designing & Planning",
    "Accreditation Support",
    "Quality Assurance",
    "Project Management",
    "Equipment Planning",
  ];
  
  return (
    <section className="relative w-full h-screen flex items-center text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-primary/80 -z-10" />
      <div className="container grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="animate-fade-in-up text-primary-foreground">
          <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-background/20 mb-4">
            We Help You Build World-Class Healthcare Facilities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Why You Should Choose Tishha For Your World-Class Hospital
          </h1>
          <ul className="mt-8 space-y-3">
            {services.map((service, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-background" />
                <span className="text-lg">{service}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg text-foreground">
            Build your dream hospital by making the right decisions at the right time.
          </p>
        </div>

        {/* Right Column */}
        <div className="animate-fade-in-up animation-delay-200">
          <Card className="bg-background/80 backdrop-blur-sm border-border/50 text-card-foreground">
            <CardHeader>
              <CardTitle className="text-3xl text-center">Get Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Name" {...field} />
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
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Phone" {...field} />
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
                        <FormControl>
                          <Textarea placeholder="Message" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}