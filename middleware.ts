// middleware.ts
import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'
import { rolEnum } from './app/types/authtypes/rol.enum';

const redirect = (url: string, request: NextRequest) => {
  return NextResponse.redirect(new URL(url, request.url))
}



// Limit the middleware to paths starting with `/api/`
export async function middleware(request: NextRequest) {
  // Call our authentication function to check the request

    const session: any = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET})
    
    if(!session && !request.nextUrl.pathname.startsWith('/auth'))
    {
      const requestPage = request.nextUrl.pathname
      const url = request.nextUrl.clone()
      url.pathname = '/auth'
      url.search = `p=${requestPage}`
      return NextResponse.redirect(url)
    }

    if(session && request.nextUrl.pathname.startsWith("/auth"))
    return redirect("/home", request)

    return NextResponse.next()

  /* if (!isAuthenticated(request)) {
    // Respond with JSON indicating an error message
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'content-type': 'application/json' } }
    )
  } */
}

export const config =
{
  matcher: ['/home/clientes/:path*', '/home/ordenes/:path*', '/auth/:path*']
}