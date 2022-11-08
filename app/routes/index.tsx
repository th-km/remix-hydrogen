import { Link, useLoaderData } from '@remix-run/react'
import { Image } from '@shopify/hydrogen-react'
import type { Collections } from '~/types/shopify'
import { fetchStorefrontAPI } from '~/lib/shopify'
import { COLLECTIONS_QUERY } from '~/lib/queries'

export async function loader() {
  return await fetchStorefrontAPI({ query: COLLECTIONS_QUERY })
}

export default function Index() {
  const { collections } = useLoaderData<typeof loader>() as Collections

  return (
    <div>
      <h1 className="font-medium text-xl">Collections</h1>

      <ul className="grid grid-cols-3 gap-6 mt-4">
        {collections.nodes.map(({ id, title, handle, image }) => (
          <li key={id}>
            <Link to={`/collections/${handle}`} className="space-y-2">
              <Image data={image} alt={title} />
              <h2>{title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
