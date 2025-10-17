
import { redirect } from 'next/navigation';

export default function ImpactZonePage() {
  // Redirect to the first sub-page of the impact zone
  redirect('/impact-zone/csr-initiative');
}
