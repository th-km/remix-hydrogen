import { Dialog, DialogDismiss, DialogHeading, useDialogState } from 'ariakit/dialog'
import { IconClose } from '~/components/Icons'

type Props = {
  open: boolean
  setOpen: (open: boolean) => void | undefined
  children: React.ReactNode
}

export function Drawer({ open, setOpen, children }: Props) {
  const dialog = useDialogState({ open, setOpen })

  return (
    <>
      {open ? (
        <Dialog
          state={dialog}
          backdrop={true}
          backdropProps={{ className: 'bg-black/40' }}
          className="fixed inset-y-0 right-0 z-50 w-96 bg-white"
        >
          <div className="sticky top-0 flex justify-between px-6 py-8 bg-slate-100">
            <DialogHeading className="font-medium text-xl">Cart</DialogHeading>
            <DialogDismiss onClick={dialog.toggle}>
              <IconClose />
            </DialogDismiss>
          </div>

          {children}
        </Dialog>
      ) : null}
    </>
  )
}
