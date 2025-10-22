import Link from "next/link";
import { Facebook, Linkedin, Instagram, X } from "lucide-react";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-start space-y-4 md:col-span-2">
            <div className="bg-white p-2 rounded-lg">
                <Logo className="h-14 w-auto" />
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-md">
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
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Healthcare Solutions</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Project Accreditation</Link></li>
              <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">IT Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="/case-studies" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Case Studies</Link></li>
              <li><Link href="/blog" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Terms of Service</Link></li>
               <li><Link href="/login" className="text-sm text-primary-foreground/80 hover:text-primary-foreground">Client Portal</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/80">
            &copy; {new Date().getFullYear()} Tishha Consultancy LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}