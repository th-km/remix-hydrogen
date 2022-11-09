import { LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { Product } from '@shopify/hydrogen-react/storefront-api-types'
import { fetchStorefrontAPI } from '~/lib/shopify'
import { PRODUCT_QUERY } from '~/lib/queries'
import { ProductDetails } from '~/components/ProductDetails'

// TODO: figure out how to type this
// Type 'SerializeObject<UndefinedToOptional<Product>>' is not assignable to type 'Product'.
export async function loader({ params }: LoaderArgs) {
  return await fetchStorefrontAPI({ query: PRODUCT_QUERY, variables: { handle: params.handle } })
}

export default function ProductPage() {
  const { product }: { product: Product } = useLoaderData<typeof loader>()

  return (
    <div className="space-y-2">
      <ProductDetails product={product} />
    </div>
  )
}
