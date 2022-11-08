import { LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import type { Product } from '~/types/shopify'
import { fetchStorefrontAPI } from '~/lib/shopify'
import { PRODUCT_QUERY } from '~/lib/queries'
import { ProductDetails } from '~/components/ProductDetails'

export async function loader({ params }: LoaderArgs) {
  return await fetchStorefrontAPI({ query: PRODUCT_QUERY, variables: { handle: params.handle } })
}

export default function ProductPage() {
  const { product } = useLoaderData<typeof loader>() as Product

  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-medium">{product.title}</h2>
      <ProductDetails product={product} />
    </div>
  )
}
