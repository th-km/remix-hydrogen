import { useProduct, Money } from '@shopify/hydrogen-react'
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
            <span className="text-black text-center py-3 px-6 border rounded-sm leading-none ">
              Sold out
            </span>
          ) : (
            <button>
              <span className="bg-black text-white inline-block rounded-sm font-medium text-center py-3 px-6 max-w-xl leading-none w-full border">
                Buy
              </span>
            </button>
          )}
        </div>
      </div>
    </form>
  )
}
