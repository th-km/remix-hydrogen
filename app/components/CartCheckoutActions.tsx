import { useCart } from '@shopify/hydrogen-react'

export function CartCheckoutActions() {
  const { checkoutUrl } = useCart()

  return (
    <>
      <div className="flex flex-col items-center mt-6 border-t border-black">
        <a
          href={checkoutUrl}
          className="inline-block w-full font-medium py-3 px-6 text-center bg-black text-white"
        >
          Continue to Checkout
        </a>
      </div>
    </>
  )
}
