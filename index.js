export async function a () {
  await new Promise(resolve => setTimeout(resolve, 1000))
}
/**
 * function b
 */
export function b () {
  console.log('b')
}