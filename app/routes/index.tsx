import { Link, useLoaderData } from '@remix-run/react'
import { Image } from '@shopify/hydrogen-react'
import { CollectionConnection } from '@shopify/hydrogen-react/storefront-api-types'
import { fetchStorefrontAPI } from '~/lib/shopify'
import { COLLECTIONS_QUERY } from '~/lib/queries'

export async function loader(): Promise<{ collections: CollectionConnection }> {
  return await fetchStorefrontAPI({ query: COLLECTIONS_QUERY })
}

export default function Index() {
  const { collections } = useLoaderData<typeof loader>()

  return (
    <div>
      <h1 className="font-medium text-xl">Collections</h1>

      <ul className="grid grid-cols-3 gap-6 mt-4">
        {collections.nodes.map(({ id, title, handle, image }) => (
          <li key={id}>
            <Link to={`/collections/${handle}`} className="space-y-2">
              {image ? <Image data={image} alt={title} /> : null}
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
