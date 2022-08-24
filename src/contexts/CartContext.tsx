import { createContext, ReactNode, useState } from 'react'

export interface ItemProps {
  id: string
  name: string
  quantity: number
}

interface CartContextProps {
  items: ItemProps[]
  addItem: (item: ItemProps) => void
  removeItem: (id: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemProps[]>([])

  function addItem(item: ItemProps) {
    setItems((state) => {
      let itemExistsInCart = false

      state.forEach((savedItem) => {
        if (savedItem.id === item.id) {
          savedItem.quantity = savedItem.quantity + 1
          itemExistsInCart = true
        }
      })

      return itemExistsInCart ? [...state] : [...state, { ...item }]
    })
  }

  function removeItem(id: string) {
    setItems((state) => state.filter((savedItem) => savedItem.id !== id))
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
