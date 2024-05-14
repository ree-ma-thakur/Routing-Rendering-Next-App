# Routing

- Static & dynamic routes
- Not found page
- Parallel Routes(PR)
  - Folder name starts with @ Eg: @archive, @latest in archive folder
  - Layout for parallel routes will not have children prop but have parallel routes as props
  - default.jsx in second parallel route need to be there because dynamic route inside first PR will only work if there is same dynamic route or default.jsx
- Catch-all Routes
  - [[...filter]] : folder name example
- Error file
  - error.jsx : Must be a client component because errors can also be possible on client not only on server; It can be used with 'use client' only

# React Server Components(RSC) vs Client Components

- RSC: Only rendered on the server, by defualt all components are RSC
- CC: Pre-rendered on server but then also potentially on the client, can be achieved using 'use client'; Eg: error.jsx, usePathname, useRouter, useState, etc

# Intercepting Route

- It is an Alternative route which sometimes get activated depending on whether we are navigating it through internal link within the page or we are coming from external link.
- It intercepts the internal navigation request.
- We can mae IR using (path-to-interceoter-route)same-name-as-of-intercepter-route Eg: (.)image
- Interceptor folder will be available in layouts also, as in @modal

# Route Groups

- Every route group has their own layout

# Route Handlers

- api folder inside app
- route.js file inside apifolder, which is also a reserved name
- With route.js file we set up route handler which is different from page
- It is a file in which we export various functions which must be named GET, POST, PATCH, PUT or DELETE
- Idea behind this is, we set up routes that don't return pages but return or accept JSON data or to store data
- It gets request & return new Response object that is provided by browser & node.js

# Middleware

- Reserved file name in root path: middleware.js
- File has middleware function which gets a request object passed automatically by Next.js & return NextResponse.next() which simple forwards the incoming request to its actual destination
- We can either forward the request or block it or resirect it (NextResponse.redirect())
- This is another feature related to routing as middleware allows us to set up code that will run on every request that is sent to any page or any route anywhere in entire website so that we can inspect the request block or redirect the request or anything
- config object: we can export that as well in we add matcher (it filter the kind of request that trigger the middleware)
- https://nextjs.org/docs/app/building-your-application/routing/middleware

## DATA FETCHING

# Client side data fetching: using useEffect & 'use client'

# Server side data fetching

- React server components can return promises also instead of just JSX
- Nextjs supports RSC therefore we can fetch data directly inside RSC
- Will make our RSC as async
- Nextjs exntends the fetch function & add some extra caching related features to it

# better-sqlite3: handle async await by its own

# loading.js (default page for loading)

- It automatically runs till the data loads
- It handles loading fallback
