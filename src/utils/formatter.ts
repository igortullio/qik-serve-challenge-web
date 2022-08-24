const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
})

export function priceFormat(price: number) {
  return priceFormatter.format(price / 100)
}

