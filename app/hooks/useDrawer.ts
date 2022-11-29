import * as React from 'react'

export function useDrawer(openDefault = false) {
  const [isOpen, setIsOpen] = React.useState(openDefault)

  function openDrawer() {
    setIsOpen(true)
  }

  function closeDrawer() {
    setIsOpen(false)
  }

  return {
    isOpen,
    openDrawer,
    closeDrawer
  }
}
