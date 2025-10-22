
import Link from "next/link";
import { Mail, Phone, Facebook, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.75,5.9 11.75,8.25C11.75,8.58 11.79,8.92 11.86,9.24C8.28,9.06 5.1,7.38 2.9,4.79C2.53,5.42 2.33,6.16 2.33,6.96C2.33,8.43 3.08,9.73 4.18,10.45C3.49,10.43 2.83,10.24 2.22,9.91V9.96C2.22,12.08 3.68,13.86 5.6,14.24C5.22,14.34 4.83,14.39 4.42,14.39C4.15,14.39 3.88,14.37 3.62,14.31C4.17,16.04 5.76,17.25 7.6,17.29C6.16,18.42 4.34,19.11 2.34,19.11C2.02,19.11 1.7,19.09 1.39,19.05C3.3,20.29 5.64,21 8.21,21C16,21 20.33,14.46 20.33,8.79C20.33,8.62 20.33,8.45 20.32,8.28C21.14,7.68 21.86,6.9 22.46,6Z" />
  </svg>
);


export default function TopNav() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container flex h-8 items-center justify-between text-sm">
        <div className="flex items-center gap-6">
          <a href="tel:1234567890" className="flex items-center gap-2 hover:underline">
            <Phone className="h-4 w-4" />
            <span className="hidden md:inline">(+91) 9690054444</span>
          </a>
          <a href="mailto:contact@tishha.com" className="hidden md:flex items-center gap-2 hover:underline">
            <Mail className="h-4 w-4" />
            <span>contact@tishha.com</span>
          </a>
        </div>
        <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Link href="https://x.com/TishhaServices"><TwitterIcon className="h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Link href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQH9EL3wZevg9gAAAZoKSnCQ1qNCLYr30Xpmt4vIcKrqy01M7X9ZnPwAQ0qFwB11BxLDhxsmdJqXhClQvAfz2uYFMjRADEeEW3xoghP67Ld8NFc6k7535xYvI4H2-NwwPcAeKLU=&original_referer=https://tishha.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Ftishha-consultants-llp-5977a2322%2F"><Linkedin className="h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Link href="https://www.facebook.com/people/TISHHA-Consultants-LLP/100064162719795/"><Facebook className="h-4 w-4" /></Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="h-7 w-7 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
                <Link href="https://www.instagram.com/tishhaconsultantsllp/"><Instagram className="h-4 w-4" /></Link>
            </Button>
        </div>
      </div>
    </div>
  );
}
