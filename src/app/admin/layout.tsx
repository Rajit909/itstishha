"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  HeartPulse,
  FileText,
  Briefcase,
  Users,
  Building,
  PanelLeft
} from "lucide-react"

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarTrigger,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarInset
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/icons"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/services", icon: HeartPulse, label: "Services" },
  { href: "/admin/blog", icon: FileText, label: "Blog Posts" },
  { href: "/admin/jobs", icon: Briefcase, label: "Job Postings" },
  { href: "/admin/team", icon: Users, label: "Team" },
  { href: "/admin/clients", icon: Building, label: "Clients" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
  
    <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-between p-2">
                <Link href="/admin/dashboard">
                    <Logo className="h-10 w-auto" />
                </Link>
                <SidebarTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <PanelLeft />
                  </Button>
                </SidebarTrigger>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || (item.href !== "/admin/dashboard" && pathname.startsWith(item.href))}
                  >
                    <Link href={item.href}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
            <div className="p-4 sm:p-6 lg:p-8">
                {children}
            </div>
        </SidebarInset>
    </SidebarProvider>
    
  );
}
