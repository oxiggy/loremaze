import type {ReactNode} from "react";
import {getServerSession} from 'next-auth';
import {authOptions} from '@/lib/auth';
import {redirect} from 'next/navigation';


export default async function Layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions)

  console.log(session, 'session');

  if (!session) return redirect('/');

  return (
    <>
      {children}
    </>
  )
}