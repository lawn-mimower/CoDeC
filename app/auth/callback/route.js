import { createClient } from '../../../src/utils/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    let next = searchParams.get('next') ?? '/'

    // Safety check: if fallback to root, check if it's a recovery flow
    // Supabase recovery flow sometimes puts 'type=recovery' in query params
    // If next is '/' (default) and it's recovery, force it to /update-password
    if (next === '/') {
        const type = searchParams.get('type')
        if (type === 'recovery') {
            next = '/update-password'
        }
    }

    if (code) {
        const supabase = await createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            const forwardedHost = request.headers.get('x-forwarded-host') // helper for Vercel
            const isLocal = origin.includes('localhost')

            if (isLocal) {
                return NextResponse.redirect(`${origin}${next}`)
            } else if (forwardedHost) {
                return NextResponse.redirect(`https://${forwardedHost}${next}`)
            } else {
                return NextResponse.redirect(`${origin}${next}`)
            }
        }
    }

    // return the user to an error page with instructions
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}
