import { Product } from '@shopify/hydrogen-react/storefront-api-types'

export function ProductDetails({ product }: { product: Product }) {
  return (
    <div>
      <h2 className="font-medium text-2xl">{product.title}</h2>
    </div>
  )
}
