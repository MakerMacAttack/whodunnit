export const assignKiller = (list) => {
  const result = list[Math.floor(Math.random() * list.length)]
  return result
}