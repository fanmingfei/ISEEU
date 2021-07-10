export function findById<T> (array: T[], id: string): T {
  // @ts-ignore
  return array.find(({id: _id})=>_id===id)
}