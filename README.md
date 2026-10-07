# Next.js App Caching

This project uses Next.js version 16.3.8 with React 19.2.8.

## Why we used Next.js

We used Next.js because it is the best choice for building a fast, modern web application with server-side rendering, static generation, and caching support built in. In this project, caching is the main topic, and Next.js makes it easy to control how data is fetched and refreshed.

Some key reasons:

- Built-in App Router for modern page structure
- Server Components for efficient data fetching
- Easy caching and revalidation support with `fetch()` options
- Faster page performance and better SEO
- Simple setup for scalable frontend applications

## Features of this project

This project demonstrates different caching techniques in a Next.js app:

- `Books` page caching database query results for reuse
- `Products` page revalidating cached database query results after 20 seconds
- `Posts` page demonstrating server-side data fetching with error handling
- Responsive UI using Tailwind CSS and DaisyUI
- Route-based pages like `/books`, `/products`, and `/posts`
- Persistent catalog data stored in Netlify Database using Drizzle ORM
- Modern React + Next.js architecture for production-ready frontend development

## How to run the project

```bash
npm install
netlify dev --port 8889
```

Then open:

```bash
http://localhost:8889
```

## Database and deployment

The catalog uses Netlify Database directly from Server Components. No external API,
localhost JSON server, or public base URL environment variable is required. Use
Netlify Dev with this project linked to its Netlify site for local database access.

The schema is defined in `db/schema.ts`. Migrations in
`netlify/database/migrations` create the catalog tables and seed the existing
10 books and 17 products on deployment. `db.json` is retained as the original
demo fixture; it is not used to store or load runtime catalog data.

Book and product pages wait for an incoming request before querying the database,
so production builds do not require a database connection or an API server.
Book list results are cached until invalidated; product list results become
eligible for revalidation after 20 seconds. Book details are queried per request,
and unknown book IDs return a 404.

After changing the schema, generate a migration with:

```bash
npx drizzle-kit generate --name describe_schema_change
```

## Summary

Next.js was chosen because it not only helps build a fast frontend but also gives us powerful tools to manage data caching efficiently. This makes the project ideal for learning how caching works in real-world web applications.
