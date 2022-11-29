// https://shopify.dev/custom-storefronts/hydrogen/alternate-frameworks
import { createStorefrontClient } from '@shopify/hydrogen-react'

export const __publicConfig = {
  storefrontToken: '3b580e70970c4528da70c98e097c2fa0',
  storeDomain: 'hydrogen-preview',
  storefrontApiVersion: '2022-10',
  locale: 'en'
}

const client = createStorefrontClient({
  publicStorefrontToken: __publicConfig.storefrontToken,
  storeDomain: __publicConfig.storeDomain,
  storefrontApiVersion: '2022-10',
  contentType: 'json'
})

/*
 * Endpoint
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
