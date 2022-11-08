import { Image, Money } from '@shopify/hydrogen-react'
import { Link } from '@remix-run/react'
import type { ProductItem } from '~/types/shopify'

type Props = {
  product: ProductItem
}

export function ProductCard({ product }: Props) {
  const { price, compareAtPrice, image } = product.variants?.nodes[0]
  const isDiscounted = compareAtPrice?.amount > price?.amount

  return (
    <li>
      <Link to={`/products/${product.handle}`}>
        <Image data={image} alt={product.title} />
        <h3>{product.title}</h3>

        <div className="flex gap-4">
          <Money data={price} />

          {isDiscounted && <Money className="line-through text-black/50" data={compareAtPrice} />}
        </div>
      </Link>
    </li>
  )
}
