export type Shop = {
  shop: {
    name: string
    description: string
  }
}

export type Product = {
  product: ProductItem
}

export type Collection = {
  collection: {
    id: string
    title: string
    description: string
    seo: Seo
    image: Image
    products: {
      nodes: ProductItem[]
    }
  }
}

export type Collections = {
  collections: {
    nodes: CollectionItem[]
  }
}

export type ProductVariant = {
  id: string
  image: Image
  price: Price
  compareAtPrice: Price
}

export type Price = {
  amount: string
  currencyCode: string
}

export type PriceRange = {
  minVariantPrice: Price
  maxVariantPrice: Price
}

export type Seo = {
  title: string
  description: string
}

export type ProductItem = {
  id: string
  title: string
  publishedAt: string
  handle: string
  variants: {
    nodes: ProductVariant[]
  }
}

export type CollectionItem = {
  id: string
  title: string
  handle: string
  image: Image
}

export type Image = {
  altText: string
  width: number
  height: number
  url: string
}
