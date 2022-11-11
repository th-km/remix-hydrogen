import { useProduct } from '@shopify/hydrogen-react'

export function OptionRadio({ values, name }: { values: string[]; name: string }) {
  const { selectedOptions, setSelectedOption } = useProduct()

  return (
    <>
      {values.map(value => {
        const checked = selectedOptions?.[name] === value
        const id = name + '-' + value

        return (
          <label key={id} htmlFor={id}>
            <input
              id={id}
              type="radio"
              name={name}
              value={value}
              checked={checked}
              className="sr-only"
              onChange={() => setSelectedOption(name, value)}
            />
            <span
              aria-checked={checked}
              className="border-b-2 py-0.5 cursor-pointer aria-checked:border-black border-b-transparent"
            >
              {value}
            </span>
          </label>
        )
      })}
    </>
  )
}
