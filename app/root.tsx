import { LinksFunction, MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from '@remix-run/react'
import { Shop } from '@shopify/hydrogen-react/storefront-api-types'
import { CartProvider, ShopifyProvider } from '@shopify/hydrogen-react'
import { fetchStorefrontAPI, __publicConfig } from '~/lib/shopify'
import { SHOP_QUERY } from '~/lib/queries'
import { Header } from '~/components/Header'
import styles from '~/styles/app.css'

export const meta: MetaFunction<typeof loader> = ({ data }) => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
  title: data.shop.name,
  description: data.shop.description
})

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export async function loader() {
  return await fetchStorefrontAPI({ query: SHOP_QUERY })
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { shop } = useLoaderData() as { shop: Shop }

  return (
    <div>
      <Header shop={shop} />
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
        <ShopifyProvider shopifyConfig={__publicConfig}>
          <CartProvider>
            <Layout>
              <Outlet />
            </Layout>
          </CartProvider>
        </ShopifyProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
