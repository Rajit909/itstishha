
import Link from "next/link";
import { Mail, Phone, Facebook, Linkedin, Instagram, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TopNav() {
  return (
    <div className="bg-darkbg text-primary-foreground">
      <div className="container flex h-8 items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:1234567890" className="flex items-center gap-2 text-primary-foreground/90 hover:underline">
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">(+91) 9690054444</span>
          </a>
          <a href="mailto:contact@tishha.com" className="hidden md:flex items-center gap-2 text-primary-foreground/90 hover:underline">
            <Mail className="h-4 w-4" />
            <span>contact@tishha.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground hover:text-darkbg">
                <Link href="https://x.com/TishhaServices"><X className="h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground hover:text-darkbg">
                <Link href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQH9EL3wZevg9gAAAZoKSnCQ1qNCLYr30Xpmt4vIcKrqy01M7X9ZnPwAQ0qFwB11BxLDhxsmdJqXhClQvAfz2uYFMjRADEeEW3xoghP67Ld8NFc6k7535xYvI4H2-NwwPcAeKLU=&original_referer=https://tishha.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftishha-consultants-llp-5977a2322%2F"><Linkedin className="h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground hover:text-darkbg">
                <Link href="https://www.facebook.com/people/TISHHA-Consultants-LLP/100064162719795/"><Facebook className="h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-primary-foreground hover:bg-primary-foreground hover:text-darkbg">
                <Link href="https://www.instagram.com/tishhaconsultantsllp/"><Instagram className="h-4 w-4" /></Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
