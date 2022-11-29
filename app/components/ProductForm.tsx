import { useProduct, Money, AddToCartButton } from '@shopify/hydrogen-react'
import { OptionRadio } from '~/components/OptionRadio'

export function ProductForm() {
  const { options, selectedVariant } = useProduct()
  const soldOut = !selectedVariant?.availableForSale || false

  return (
    <form>
      <div className="space-y-4">
        {options
          ? options.map(({ name, values }: any) => {
              if (values.length === 1) return null

              return (
                <div key={name} className="flex flex-wrap items-baseline justify-start gap-4">
                  <span className="whitespace-pre-wrap font-bold">{name}</span>

                  <div className="flex flex-wrap items-baseline gap-4">
                    <OptionRadio name={name} values={values} />
                  </div>
                </div>
              )
            })
          : null}

        <Money data={selectedVariant?.price!} withoutTrailingZeros className="font-bold" />

        <div className="mt-10">
          {soldOut ? (
            <span className="py-3 px-6 border rounded-sm text-black text-center leading-none">
              Sold out
            </span>
          ) : (
            <AddToCartButton className="inline-block max-w-xl py-3 px-6 border rounded-sm text-center leading-none font-medium bg-black text-white">
              Buy
            </AddToCartButton>
          )}
        </div>
      </div>
    </form>
  )
}
