import { getTeamMembers } from "@/lib/data";
import { TeamManagement } from "./components/team-management";

export default async function ManageTeamPage() {
  const teamMembers = await getTeamMembers();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Team Members</h1>
        <p className="text-muted-foreground mt-2">Add, edit, or remove team member profiles.</p>
      </div>
      <TeamManagement initialData={teamMembers} />
    </div>
  );
}
