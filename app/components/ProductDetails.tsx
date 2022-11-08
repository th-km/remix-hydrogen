import { ProductItem } from '~/types/shopify'

type Props = {
  product: ProductItem
}

export function ProductDetails({ product }: Props) {
  return <div>{product.title}</div>
}
