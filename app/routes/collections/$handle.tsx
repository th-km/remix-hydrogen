import { LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Collection } from '@shopify/hydrogen-react/storefront-api-types'
import { fetchStorefrontAPI } from '~/lib/shopify'
import { COLLECTION_DETAILS_QUERY } from '~/lib/queries'
import { ProductCard } from '~/components/ProductCard'

// TODO: figure out how to type this
// Type 'SerializeObject<UndefinedToOptional<Product>>' is not assignable to type 'Product'.
export async function loader({ params }: LoaderArgs) {
  return await fetchStorefrontAPI({
    query: COLLECTION_DETAILS_QUERY,
    variables: { handle: params.handle }
  })
}

export default function CollectionPage() {
  const { collection }: { collection: Collection } = useLoaderData<typeof loader>()

  return (
    <div>
      <div className="max-w-xl space-y-2">
        <h1 className="font-medium text-2xl">{collection.title}</h1>
        <p>{collection.description}</p>
      </div>

      <ul className="grid grid-cols-4 gap-6 mt-10">
        {collection.products.nodes.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ul>
    </div>
  )
}
