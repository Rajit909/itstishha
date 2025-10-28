
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, X } from "lucide-react";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          <div className="md:col-span-3 flex flex-col items-start space-y-4">
            <div className="p-2 rounded-lg">
                <Logo className="h-14 w-auto" />
            </div>
            <p className="text-sm text-primary-foreground/90 max-w-md">
              Tishha provides expert solutions in healthcare, project accreditation, and IT to propel your organization forward.
            </p>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Link href="https://x.com/TishhaServices"><X className="h-4 w-4" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Link href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQH9EL3wZevg9gAAAZoKSnCQ1qNCLYr30Xpmt4vIcKrqy01M7X9ZnPwAQ0qFwB11BxLDhxsmdJqXhClQvAfz2uYFMjRADEeEW3xoghP67Ld8NFc6k7535xYvI4H2-NwwPcAeKLU=&original_referer=https://tishha.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftishha-consultants-llp-5977a2322%2F"><Linkedin className="h-4 w-4" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Link href="https://www.facebook.com/people/TISHHA-Consultants-LLP/100064162719795/"><Facebook className="h-4 w-4" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Link href="https://www.instagram.com/tishhaconsultantsllp/"><Instagram className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-primary-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">About Us</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">Services</Link></li>
              <li><Link href="/projects" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">Projects</Link></li>
              <li><Link href="/blog" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">Careers</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4 text-primary-foreground">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">Healthcare Solutions</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">Project Accreditation</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">IT Consultation</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">Financial Consultancy</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">Recruitment Consultancy</Link></li>
            </ul>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
                 <h3 className="font-semibold mb-4 text-primary-foreground">Get In Touch</h3>
                 <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                        <span className="text-sm text-primary-foreground/90">123 Tishha Way, Innovation City, 12345</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Phone className="h-5 w-5 mt-1 flex-shrink-0" />
                        <a href="tel:+919690054444" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">(+91) 9690054444</a>
                    </li>
                     <li className="flex items-start gap-3">
                        <Mail className="h-5 w-5 mt-1 flex-shrink-0" />
                        <a href="mailto:contact@tishha.com" className="text-sm text-primary-foreground/90 hover:text-primary-foreground hover:underline">contact@tishha.com</a>
                    </li>
                 </ul>
            </div>
            <div>
                 <h3 className="font-semibold mb-4 text-primary-foreground">Our Location</h3>
                 <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.1751329021206!2d76.6575858151258!3d30.51619898171171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b347ded024bda7!2sChandigarh!5e0!3m2!1sen!2sin!4v1620817336916!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps"
                    ></iframe>
                 </div>
            </div>
          </div>

        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/80">
          <p>
            &copy; {new Date().getFullYear()} Tishha Consultancy LLP. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
            <Link href="/login" className="hover:underline">Client Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
