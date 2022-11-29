import { useFetcher } from '@remix-run/react'
import { useCart } from '@shopify/hydrogen-react'
import { CartEmpty } from '~/components/CartEmpty'
import { CartLineItem } from '~/components/CartLineItem'
import { OrderSummary } from '~/components/OrderSummary'
import { CartCheckoutActions } from '~/components/CartCheckoutActions'

type Props = {
  onClose: () => void
}

export function CartDetails({ onClose }: Props) {
  const fetcher = useFetcher()
  const { lines } = useCart()
  console.log(lines)

  if (lines?.length === 0) {
    return <CartEmpty onClose={onClose} />
  }

  return (
    <fetcher.Form className="flex flex-col h-[calc(100vh-5.75rem)]">
      <div aria-labelledby="cart-contents" className="p-6 overflow-auto">
        <ul className="flex flex-col gap-6">
          {lines?.map(line => (
            <CartLineItem key={line.id} line={line} />
          ))}
        </ul>
      </div>

      <div aria-labelledby="cart-summary" className="mt-auto p-6 bg-slate-100">
        <h2 className="font-medium text-base">Order Summary</h2>
        <OrderSummary />
        <CartCheckoutActions />
      </div>
    </fetcher.Form>
  )
}
