
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logo } from "@/components/icons";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { projectCategories } from "@/lib/project-categories";

const aboutUsLinks = [
  { href: "/about/philosophy", label: "Philosophy" },
  { href: "/about/mission-vision-commitment", label: "Mission, Vision And Commitment" },
  { href: "/about/our-objectives", label: "Our Objectives" },
  { href: "/about/board-of-directors", label: "Board Of Directors" },
  { href: "/about/strategic-leadership", label: "Strategic Leadership" },
];

const servicesLinks = [
  { href: "/services/planning-designing", label: "Planning & Designing" },
  { href: "/services/financial-consultancy", label: "Financial Consultancy" },
  { href: "/services/recruitment-consultancy", label: "Recruitment Consultancy" },
  { href: "/services/quality-accreditation", label: "Quality Accreditation" },
  { href: "/services/operational-acquisition", label: "Operational Acquisition" },
  { href: "/services/digital-solution", label: "Digital Solution" },
  { href: "/services/equipment-consultancy", label: "Equipment Consultancy" },
  { href: "/services/feasibility-study", label: "Feasibility Study" },
];

const projectLinks = [
    { href: "/projects?status=latest", label: "Latest Projects" },
    { href: "/projects?status=previous", label: "Previous Projects" },
    { href: "/projects?status=upcoming", label: "Upcoming Projects" },
];

const blogLinks = [
    { href: "/blog", label: "Latest Blogs" },
    { href: "/blog", label: "Previous Blogs" },
];

const impactZoneLinks = [
    { href: "/impact-zone/csr-initiative", label: "CSR Initiative" },
    { href: "/impact-zone/academic-events", label: "Academic Events" },
    { href: "/impact-zone/gallery", label: "Gallery" },
    { href: "/impact-zone/video-gallery", label: "Video Gallery" },
];

const navLinks = [
  {
    label: "Home",
    href: "/"
  },
  {
    label: "About Us",
    href: "/about",
    subLinks: aboutUsLinks,
  },
  {
    label: "Services",
    href: "/services",
    subLinks: servicesLinks,
  },
  {
    label: "Projects",
    href: "/projects",
    subLinks: projectLinks,
  },
  {
    label: "Blogs",
    href: "/blog",
    subLinks: blogLinks,
  },
  {
    label: "Impact Zone",
    href: "/impact-zone",
    subLinks: impactZoneLinks,
  },
  {
    label: "Careers",
    href: "/careers",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({
    href,
    label,
    subLinks,
    isMobile,
  }: {
    href: string;
    label: string;
    subLinks?: { href: string; label: string }[];
    isMobile?: boolean;
  }) => {
    const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

    if (isMobile) {
      if (subLinks) {
        return (
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-lg font-medium">
              {label}
              <ChevronDown className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 border-l-2 border-muted">
              {subLinks.map((subLink) => (
                <Link
                  key={subLink.label}
                  href={subLink.href}
                  className="block py-2 text-muted-foreground font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {subLink.label}
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>
        );
      }
      return (
        <Link
          href={href}
          className="block py-2 text-lg font-medium"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {label}
        </Link>
      );
    }

    const navLinkClasses = cn(
        "font-semibold text-sm transition-colors text-white/90 hover:text-white",
        "inline-flex items-center justify-center px-3 py-2 rounded-md",
        isActive ? "bg-white/10 text-white" : ""
    );

    if (subLinks) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(navLinkClasses, "group")}
            >
              {label} <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent 
            className="w-56 bg-background/95 backdrop-blur-sm border-border/20 text-foreground shadow-lg"
            sideOffset={15}
          >
            {subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.label} asChild className="focus:bg-darkbg/80 focus:text-primary-foreground">
                <Link href={subLink.href} className="font-serif font-medium">{subLink.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        href={href}
        className={navLinkClasses}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b border-border/40 bg-darkbg transition-all duration-300")}>
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className={cn('h-5 w-5 text-white')} />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0 bg-background">
                <Link
                  href="/"
                  className="mb-8 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Logo className="h-10 w-auto" />
                </Link>
                <div className="flex flex-col space-y-3 pr-6">
                  {navLinks.map((link) => (
                    <NavLink key={link.label} {...link} isMobile />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
