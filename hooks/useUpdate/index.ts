import { useState, useCallback } from 'react'

/**
 * 强制刷新
 */
export const useUpdate = () => {
  const [_, setState] = useState(0)
  return useCallback(() => {
    setState((num: number): number => num + 1)
  }, [])
}
