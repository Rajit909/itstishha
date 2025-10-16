import { getClients } from "@/lib/data";
import { ClientsManagement } from "./components/clients-management";

export default async function ManageClientsPage() {
  const clients = await getClients();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Clients</h1>
        <p className="text-muted-foreground mt-2">Add, edit, or remove client profiles and testimonials.</p>
      </div>
      <ClientsManagement initialData={clients} />
    </div>
  );
}
