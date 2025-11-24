import { redirect } from 'next/navigation';

export default function FoundersPage() {
  // Most of the founder content is on the about page for now.
  // This can be built out into a full page later.
  redirect('/about');
}
