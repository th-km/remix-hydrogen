type Props = {
  onClose: () => void
}

export function CartEmpty({ onClose }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Your cart is empty</h2>

      <button onClick={onClose} className="mt-2 p-3 bg-black text-white">
        Continue shopping
      </button>
    </div>
  )
}
