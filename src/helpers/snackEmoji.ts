export function snackEmoji(name: string) {
  switch (name.toLocaleLowerCase()) {
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🥤'
    case 'ice-cream':
      return '🍨'
  }
}
