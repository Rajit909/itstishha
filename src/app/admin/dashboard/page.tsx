import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartPulse, FileText, Briefcase, Users, Building } from 'lucide-react';
import { getServices, getBlogPosts, getJobOpenings, getTeamMembers, getClients } from "@/lib/data";

export default async function DashboardPage() {
  const services = await getServices();
  const blogPosts = await getBlogPosts();
  const jobs = await getJobOpenings();
  const team = await getTeamMembers();
  const clients = await getClients();

  const stats = [
    { title: "Services", count: services.length, icon: HeartPulse },
    { title: "Blog Posts", count: blogPosts.length, icon: FileText },
    { title: "Job Openings", count: jobs.length, icon: Briefcase },
    { title: "Team Members", count: team.length, icon: Users },
    { title: "Clients", count: clients.length, icon: Building },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight font-headline">Dashboard</h1>
      <p className="text-muted-foreground mt-2">Welcome to the Tishha Admin Panel.</p>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-8">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.count}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
          <Card>
              <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                  <p className="text-muted-foreground">Activity feed will be displayed here.</p>
              </CardContent>
          </Card>
      </div>
    </div>
  );
}
