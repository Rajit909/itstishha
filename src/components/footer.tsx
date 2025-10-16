import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-start space-y-4 md:col-span-2">
            <Logo className="h-7 w-auto" />
            <p className="text-sm text-muted-foreground max-w-md">
              tishha provides expert solutions in healthcare, project accreditation, and IT to propel your organization forward.
            </p>
            <div className="flex space-x-1">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Twitter className="h-4 w-4" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Linkedin className="h-4 w-4" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Facebook className="h-4 w-4" /></Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#"><Instagram className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Healthcare Solutions</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Project Accreditation</Link></li>
              <li><Link href="/services" className="text-sm text-muted-foreground hover:text-primary">IT Consultation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary">Case Studies</Link></li>
              <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="/careers" className="text-sm text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} tishha consultancy LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
