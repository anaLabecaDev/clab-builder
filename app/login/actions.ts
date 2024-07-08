'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import {userAuthSchema, type UserAuthSchemaType} from '@/schemas/user-auth'


export async function login(data: UserAuthSchemaType) {
  const supabase = createClient();

  const result = userAuthSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    return {
      error: errorMessages,
    };
  }

  try {
    await supabase.auth.signInWithPassword(data)
  } catch (error) {
    return {
      error: 'SERVER ERROR',
    };
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signUp(data: UserAuthSchemaType) {
  const supabase = createClient()

  const result = userAuthSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.reduce((prev, issue) => {
      return (prev += issue.message);
    }, '');
    return {
      error: errorMessages,
    };
  }

  try {
    await supabase.auth.signUp(data)
  } catch (error) {
    return {
      error: 'SERVER ERROR',
    };
  }

  revalidatePath('/', 'layout')
  redirect('/')
}