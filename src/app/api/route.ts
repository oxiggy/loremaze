import { type NextRequest, NextResponse } from 'next/server'

/*
export const GET = async (request: Request) => {
  return new Response(JSON.stringify({ version: '0.1.0' }), {
    headers: {
      'Content-Type': 'application/json',
    }
  })
}
*/

export const GET = async (req: NextRequest) => {
	return NextResponse.json({ version: '0.1.0' })
}
