
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

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
    if (isMobile) {
      if (subLinks) {
        return (
          <Collapsible>
            <CollapsibleTrigger className="flex w-full items-right justify-between py-2 text-lg font-medium">
              {label}
              <ChevronDown className="h-4 w-4" />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4">
              {subLinks.map((subLink) => (
                <Link
                  key={subLink.label}
                  href={subLink.href}
                  className="block py-2 text-muted-foreground"
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

    if (subLinks) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "font-medium transition-colors hover:text-primary text-sm",
                pathname.startsWith(href)
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {label} <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {subLinks.map((subLink) => (
              <DropdownMenuItem key={subLink.label} asChild>
                <Link href={subLink.href}>{subLink.label}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        href={href}
        className={cn(
          "font-medium transition-colors hover:text-primary text-sm",
          pathname.startsWith(href)
            ? "text-primary"
            : "text-muted-foreground"
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Logo className="h-12 w-auto" />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-2 text-sm">
            {navLinks.map((link) => (
              <NavLink key={link.label} {...link} />
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <Link
                  href="/"
                  className="mb-8 flex items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Logo className="h-10 w-auto" />
                </Link>
                <div className="flex flex-col space-y-3">
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
