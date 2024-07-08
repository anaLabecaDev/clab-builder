import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }
  
  return (
    <>
      <h1>Dashboard</h1>
      <p>Hello {data.user.email}</p>
    </>
  );
}
