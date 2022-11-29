import { Link } from '@remix-run/react'
import { Shop } from '@shopify/hydrogen-react/storefront-api-types'
import { useDrawer } from '~/hooks/useDrawer'
import { Drawer } from '~/components/Drawer'
import { CartBadge } from '~/components/CartBadge'
import { CartDetails } from '~/components/CartDetails'
import { BagIcon } from '~/components/Icons'

export function Header({ shop }: { shop: Shop }) {
  const { isOpen, openDrawer, closeDrawer } = useDrawer()

  return (
    <>
      <Drawer open={isOpen} setOpen={closeDrawer}>
        <CartDetails onClose={closeDrawer} />
      </Drawer>

      <header className="flex justify-between px-6 py-8 bg-slate-100">
        <Link to="/">
          <h1 className="font-medium text-xl">{shop.name}</h1>
        </Link>

        <button onClick={openDrawer} className="flex items-center">
          <BagIcon />
          <CartBadge />
        </button>
      </header>
    </>
  )
}
