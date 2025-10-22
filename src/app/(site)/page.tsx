
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Building, HeartPulse, Code, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { getServices, getClients, getBlogPosts, getCaseStudies, getTeamMembers } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { GetTouch } from "@/components/get-in-touch";
import { ScrollAnimation } from "@/components/ui/scroll-animation";
import { ClientLogoCarousel } from "@/components/client-logo-carousel";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { ServiceIcon } from "@/components/service-icon";
import { HeroSection } from "@/components/hero-section";

export default async function HomePage() {
  const services = (await getServices()).slice(0, 3);
  const clients = await getClients();
  const recentPosts = (await getBlogPosts()).slice(0, 2);
  const featuredStudy = (await getCaseStudies())[0];
  const featuredStudyImage = PlaceHolderImages.find(p => p.id === featuredStudy.image);
  const team = await getTeamMembers();
  const teamMeetingImage = PlaceHolderImages.find(p => p.id === 'team-meeting');

  return (
    <div className="flex flex-col">
     
      <HeroSection />

       {/* Why Choose Us Section */}
       <section className="py-16 md:py-24 bg-card">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation animation="slide-in-from-left" className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-xl order-last md:order-first">
                 {teamMeetingImage && <Image
                    src={teamMeetingImage.imageUrl}
                    alt={teamMeetingImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={teamMeetingImage.imageHint}
                />}
            </ScrollAnimation>
            <ScrollAnimation animation="slide-in-from-right">
                <h2 className="text-3xl md:text-4xl font-bold">Why Partner with Tishha?</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our approach is rooted in partnership, deep industry knowledge, and a commitment to delivering measurable results.
                </p>
                <ul className="mt-8 space-y-6">
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg">Expert Teams</h3>
                            <p className="text-muted-foreground mt-1">Access seasoned professionals with decades of combined experience in their respective fields.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg">Customized Strategies</h3>
                            <p className="text-muted-foreground mt-1">We don't believe in one-size-fits-all. Our solutions are tailored to your unique needs and goals.</p>
                        </div>
                    </li>
                    <li className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="font-semibold text-lg">Proven Results</h3>
                            <p className="text-muted-foreground mt-1">We have a track record of success, helping clients achieve accreditation, optimize operations, and innovate.</p>
                        </div>
                    </li>
                </ul>
                <Button className="mt-8" asChild size="lg">
                    <Link href="/about">Meet Our Team</Link>
                </Button>
            </ScrollAnimation>
        </div>
      </section>
      {/* Featured Services Section */}
      <section id="services" className="py-16 md:py-24 bg-background">
        <div className="container">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Our Core Expertise</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We deliver tailored solutions across key industries to meet your most critical challenges.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <ScrollAnimation key={service.id} animation="zoom-in" delay={index * 150}>
                <Card className="group overflow-hidden flex flex-col text-center items-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <ServiceIcon name={service.icon} className="h-8 w-8" />
                    </div>
                    <CardTitle className="mt-4">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-justify">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" asChild>
                      <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Case Study */}
      {featuredStudy && (
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
            <ScrollAnimation animation="fade-in-up">
              <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold">Success Story</h2>
                  <p className="mt-4 text-lg text-muted-foreground">See how we made a difference. Read our featured case study.</p>
              </div>
            </ScrollAnimation>
            <div className="mt-12 grid md:grid-cols-2 gap-12 items-center">
              <ScrollAnimation animation="slide-in-from-left" className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  {featuredStudyImage && <Image
                      src={featuredStudyImage.imageUrl}
                      alt={featuredStudy.title}
                      fill
                      className="object-cover"
                      data-ai-hint={featuredStudyImage.imageHint}
                  />}
              </ScrollAnimation>
              <ScrollAnimation animation="slide-in-from-right">
                  <p className="font-semibold text-primary">{featuredStudy.client}</p>
                  <h3 className="mt-2 text-2xl md:text-3xl font-bold">{featuredStudy.title}</h3>
                  <p className="mt-4 text-lg text-muted-foreground">{featuredStudy.excerpt}</p>
                  <Button asChild className="mt-6" size="lg">
                      <Link href={`/case-studies/${featuredStudy.slug}`}>Read The Full Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
              </ScrollAnimation>
            </div>
        </div>
      </section>
      )}

      {/* Industries We Serve Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We provide specialized consulting services for a variety of sectors, leveraging our deep industry knowledge to drive success.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ScrollAnimation animation="zoom-in" delay={0}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <HeartPulse className="h-8 w-8" />
                  </div>
                  <CardTitle>Healthcare</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Optimizing patient care, streamlining operations, and ensuring regulatory compliance for healthcare providers.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation animation="zoom-in" delay={150}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Code className="h-8 w-8" />
                  </div>
                  <CardTitle>Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Driving innovation and growth with cutting-edge IT strategies, cloud solutions, and cybersecurity.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation animation="zoom-in" delay={300}>
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Building className="h-8 w-8" />
                  </div>
                  <CardTitle>Public Sector</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Enhancing efficiency and public trust through project accreditation and IT modernization for government agencies.</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

     

      {/* Team Section */}
      <section className="py-16 md:py_24 bg-background">
        <div className="container">
            <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold">Meet Our Leadership</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Our team's diverse expertise is the driving force behind our success and the success of our clients.
                </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {team.map((member, index) => {
                    const memberImage = PlaceHolderImages.find(p => p.id === member.image);
                    return (
                        <div key={member.id} className="animate-fade-in-up" style={{ animationDelay: `${200 * index}ms`}}>
                          <Card className="text-center group overflow-hidden h-full">
                              <CardContent className="p-0">
                                  {memberImage && (
                                  <div className="relative h-64 w-full">
                                      <Image
                                      src={memberImage.imageUrl}
                                      alt={member.name}
                                      fill
                                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                                      data-ai-hint={memberImage.imageHint}
                                      />
                                  </div>
                                  )}
                                  <div className="p-6">
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-primary font-medium">{member.title}</p>
                                    <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
                                  </div>
                              </CardContent>
                          </Card>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We are proud to build lasting partnerships with our clients.
              </p>
            </div>
          </ScrollAnimation>
          <TestimonialsCarousel clients={clients} />
        </div>
      </section>

      <ClientLogoCarousel />

      {/* Latest Insights Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container">
          <ScrollAnimation animation="fade-in-up">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Latest Insights</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Explore the latest trends and expert analysis from our team.
              </p>
            </div>
          </ScrollAnimation>
          <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {recentPosts.map((post, index) => {
                const postImageSrc = PlaceHolderImages.find(p => p.id === post.image)?.imageUrl || post.image;
                const imageHint = PlaceHolderImages.find(p => p.id === post.image)?.imageHint;
                return (
                  <ScrollAnimation key={post.id} animation="fade-in-up" delay={index * 150}>
                    <Card className="group overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300 h-full bg-background">
                        {postImageSrc && <div className="relative h-56 w-full overflow-hidden">
                          <Image src={postImageSrc} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={imageHint || 'blog post'} />
                        </div>}
                        <CardHeader>
                            <CardTitle className="text-xl h-14 leading-tight">{post.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant="link" asChild className="p-0 h-auto">
                            <Link href={`/blog/${post.slug}`}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                  </ScrollAnimation>
                )
            })}
          </div>
          <div className="text-center mt-12">
              <ScrollAnimation animation="fade-in-up">
                <Button asChild size="lg">
                    <Link href="/blog">View All Insights</Link>
                </Button>
              </ScrollAnimation>
          </div>
        </div>
      </section>
           {/* CTA Section */}
           <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center">
          <ScrollAnimation animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Business?</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Let's discuss how Tishha can help you achieve your goals. Schedule a free consultation with our experts today.
            </p>
            {/* <Button size="lg" variant="secondary" className="mt-8 transform hover:scale-105 transition-transform" asChild>
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button> */}
          </ScrollAnimation>
        </div>
      </section>

      <GetTouch />

 
    </div>
  );
}

    