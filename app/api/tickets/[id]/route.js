
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function DELETE(_, {params}){
  const {id} = params
  const supabase = createRouteHandlerClient({ cookies })
  const {error}=supabase.from('tickets').delete().eq('id',id)
  return NextResponse.json({error})
}