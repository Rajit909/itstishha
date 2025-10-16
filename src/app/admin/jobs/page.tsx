import { getJobOpenings } from "@/lib/data";
import { JobsManagement } from "./components/jobs-management";

export default async function ManageJobsPage() {
  const jobs = await getJobOpenings();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Job Postings</h1>
        <p className="text-muted-foreground mt-2">Create, edit, and manage all job openings.</p>
      </div>
      <JobsManagement initialData={jobs} />
    </div>
  );
}
