import { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'
import { Shop } from '@shopify/hydrogen-react/storefront-api-types'
import { fetchStorefrontAPI } from '~/lib/shopify'
import { SHOP_QUERY } from '~/lib/queries'
import styles from '~/styles/app.css'

export const meta: MetaFunction<typeof loader> = ({ data }) => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: data.shop.name,
  description: data.shop.description
})

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export async function loader(): Promise<{ shop: Shop }> {
  return await fetchStorefrontAPI({ query: SHOP_QUERY })
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { shop } = useLoaderData<typeof loader>()

  return (
    <div>
      <header className="px-6 py-8 bg-slate-100">
        <Link to="/">
          <h1 className="text-xl font-medium">{shop.name}</h1>
        </Link>
      </header>

      <main className="p-6">{children}</main>
    </div>
  )
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
