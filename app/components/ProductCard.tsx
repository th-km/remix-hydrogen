import { Image, Money } from '@shopify/hydrogen-react'
import { Product } from '@shopify/hydrogen-react/storefront-api-types'
import { Link } from '@remix-run/react'

export function ProductCard({ product }: { product: Product }) {
  const { price, compareAtPrice, image } = product.variants?.nodes[0]
  const isDiscounted = compareAtPrice && compareAtPrice.amount > price.amount

  return (
    <li>
      <Link to={`/products/${product.handle}`}>
        {image ? <Image data={image} alt={product.title} /> : null}

        <h3>{product.title}</h3>

        <div className="flex gap-4">
          <Money data={price} />

          {isDiscounted ? (
            <Money className="line-through text-black/50" data={compareAtPrice} />
          ) : null}
        </div>
      </Link>
    </li>
  )
}
