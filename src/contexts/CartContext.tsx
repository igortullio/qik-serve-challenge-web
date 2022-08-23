import { createContext, ReactNode, useState } from 'react'

export interface ItemProps {
  id: string
  quantity: number
}

interface CartContextProps {
  items: ItemProps[]
  allItems: number
  addItem: (id: string) => void
  removeItem: (id: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<ItemProps[]>([])
  const [allItems, setAllItems] = useState(0)

  function addItem(id: string) {
    setAllItems(state => state + 1)
    setItems((state) => {
      let itemExistsInCart = false

      state.forEach((savedItem) => {
        if (savedItem.id === id) {
          savedItem.quantity = savedItem.quantity + 1
          itemExistsInCart = true
        }
      })

      return itemExistsInCart ? state : [...state, { id, quantity: 1 }]
    })
  }

  function removeItem(id: string) {
    setItems((state) => state.filter((savedItem) => savedItem.id !== id))
  }

  return (
    <CartContext.Provider value={{ items, allItems, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  )
}
