export const assignKiller = (list) => {
  const idx = Math.floor(Math.random() * list.length)
  const result = list[idx]
  return result
}