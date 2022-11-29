import { useCart } from '@shopify/hydrogen-react'

export function CartBadge() {
  const { totalQuantity } = useCart()

  if (totalQuantity < 1) {
    return null
  }

  return (
    <div className="ml-2 text-xs">
      <span>{totalQuantity}</span>
    </div>
  )
}
