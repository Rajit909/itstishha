
import { getServices } from "@/lib/data";
import { ServicesManagement } from "./components/services-management";

export default async function ManageServicesPage() {
  const services = await getServices();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Manage Services</h1>
        <p className="text-muted-foreground mt-2">Add, edit, or remove company services.</p>
      </div>
      <ServicesManagement initialData={services} />
    </div>
  );
}
