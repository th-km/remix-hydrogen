import { gql } from '~/lib/shopify'
import { MEDIA_FRAGMENT, PRODUCT_CARD_FRAGMENT } from './fragments'

export const SHOP_QUERY = gql`
  query Shopinfo {
    shop {
      name
      description
    }
  }
`

export const COLLECTIONS_QUERY = gql`
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart", sortKey: UPDATED_AT) {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`

export const COLLECTION_DETAILS_QUERY = gql`
  ${PRODUCT_CARD_FRAGMENT}
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      products(first: 8) {
        nodes {
          ...ProductCard
        }
      }
    }
  }
`

export const PRODUCT_QUERY = gql`
  ${MEDIA_FRAGMENT}
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      vendor
      media(first: 7) {
        nodes {
          ...MediaFields
        }
      }
      variants(first: 100) {
        nodes {
          id
          availableForSale
          compareAtPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
          image {
            id
            url
            altText
            width
            height
          }
          price {
            amount
            currencyCode
          }
          sku
          title
          unitPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`
