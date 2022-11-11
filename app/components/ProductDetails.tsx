import { ProductProvider, MediaFile } from '@shopify/hydrogen-react'
import { Product } from '@shopify/hydrogen-react/storefront-api-types'
import { ProductForm } from '~/components/ProductForm'

export function ProductDetails({ product }: { product: Product }) {
  return (
    <ProductProvider data={product}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-6">
          <div>
            <h2 className="font-bold text-3xl">{product.title}</h2>
            <span className="inline-block mt-1">{product.vendor}</span>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            className="[&>*]:mt-4"
          />

          <ProductForm />
        </div>

        <ul className="grid grid-cols-2 gap-4">
          {product.media.nodes.map((media, index) => (
            <li key={index} className={`${index % 3 === 0 ? 'col-span-2' : 'col-span-1'}`}>
              <MediaFile data={media} />
            </li>
          ))}
        </ul>
      </div>
    </ProductProvider>
  )
}
