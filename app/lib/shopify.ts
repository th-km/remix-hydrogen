// https://shopify.dev/custom-storefronts/hydrogen/alternate-frameworks
import { createStorefrontClient } from '@shopify/hydrogen-react'

const client = createStorefrontClient({
  // privateStorefrontToken: process.env.STOREFRONT_TOKEN,
  publicStorefrontToken: process.env.PUBLIC_STOREFRONT_TOKEN,
  storeDomain: process.env.PUBLIC_STORE_DOMAIN || '',
  storefrontApiVersion: '2022-10',
  contentType: 'json'
})

/*
 * Endpoints
 * https://<SHOP_NAME>.myshopify.com/api/<API_VERSION>/graphql.json
 */

export const getStorefrontApiUrl = client.getStorefrontApiUrl

/*
 * Headers
 * 'content-type': 'application/json',
 * 'X-SDK-Variant': 'hydrogen-ui',
 * 'X-SDK-Variant-Source': 'react',
 * 'X-SDK-Version': '<API_VERSION>',
 * 'X-Shopify-Storefront-Access-Token': '<STOREFRONT_TOKEN>'
 */

// export const getPrivateTokenHeaders = client.getPrivateTokenHeaders
export const getPublicTokenHeaders = client.getPublicTokenHeaders

export async function fetchStorefrontAPI({
  query,
  variables
}: {
  query: string
  variables?: Record<string, any>
}) {
  const response = await fetch(getStorefrontApiUrl(), {
    method: 'POST',
    headers: getPublicTokenHeaders(),
    body: JSON.stringify({ query, variables })
  })

  const result = await response.json()
  return result.data
}

export const gql = String.raw
