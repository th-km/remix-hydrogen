import { Link } from '@remix-run/react'
import { useCart } from '@shopify/hydrogen-react'

export function CartCheckoutActions() {
  const { checkoutUrl } = useCart()

  return (
    <>
      <div className="flex flex-col items-center mt-6 border-t border-black">
        <Link
          to={checkoutUrl}
          className="inline-block w-full font-medium py-3 px-6 text-center bg-black text-white"
        >
          Continue to Checkout
        </Link>
      </div>
    </>
  )
}
