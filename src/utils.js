export const draf = (cb) => requestAnimationFrame(() => requestAnimationFrame(cb))

export const defaultOptions = {
  politeness: 'polite',
  complementRoute: 'has loaded'
}
