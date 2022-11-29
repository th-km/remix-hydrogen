import { useCart } from '@shopify/hydrogen-react'

type Props = {
  id: string
  quantity: number
}

export function CartLineQuantityAdjust({ id, quantity }: Props) {
  const { linesUpdate } = useCart()

  return (
    <div>
      <label htmlFor={`quantity-${id}`} className="sr-only">
        Quantity, {quantity}
      </label>

      <div className="flex items-center border">
        <button
          aria-label="Decrease quantity"
          onClick={() => linesUpdate([{ id, quantity: quantity - 1 }])}
          className="h-[40px] flex justify-center items-center px-3 py-[0.125rem]"
        >
          &#8722;
        </button>

        <span className="h-[40px] flex justify-center items-center text-center py-[0.125rem] px-2 text-primary/90">
          {quantity}
        </span>

        <button
          aria-label="Increase quantity"
          onClick={() => linesUpdate([{ id, quantity: quantity + 1 }])}
          className="h-[40px] flex justify-center items-center px-3 py-[0.125rem]"
        >
          &#43;
        </button>
      </div>
    </div>
  )
}
