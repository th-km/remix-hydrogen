import { Link } from '@remix-run/react'
import { Image, Money } from '@shopify/hydrogen-react'
import { CartLine } from '@shopify/hydrogen-react/storefront-api-types'
import { CartLineQuantityAdjust } from '~/components/CartLineQuantityAdjust'

type Props = {
  line: CartLine
}

export function CartLineItem({ line }: Props) {
  const { id, quantity, merchandise, cost } = line

  return (
    <li key={id}>
      <div className="flex items-start gap-4">
        {merchandise.image && (
          <div className="w-24 border">
            <Image data={merchandise.image} />
          </div>
        )}

        <div className="flex gap-6">
          <div className="flex flex-col items-start gap-4">
            <h3 className="font-medium">
              <Link to={`/products/${merchandise.product.handle}`}>
                {merchandise.product.title}
              </Link>
            </h3>

            <div className="flex flex-col mt-2">
              {(merchandise.selectedOptions || []).map(option => (
                <span key={option.name} className="text-sm text-gray-500">
                  {option.name}: {option.value}
                </span>
              ))}
            </div>

            <div>
              <CartLineQuantityAdjust id={id} quantity={quantity} />
            </div>
          </div>

          <div>
            <Money data={cost.compareAtAmountPerQuantity} />
          </div>
        </div>
      </div>
    </li>
  )
}
