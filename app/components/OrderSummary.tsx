import { useCart, Money } from '@shopify/hydrogen-react'

export function OrderSummary() {
  const { cost } = useCart()

  return (
    <dl className="space-y-2">
      <div className="flex items-center justify-between">
        <dt>Subtotal</dt>
        <dd>
          <Money data={cost?.subtotalAmount} />
        </dd>
      </div>
    </dl>
  )
}
