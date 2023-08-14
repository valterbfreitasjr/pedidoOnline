import { SkeletonElement } from './styles'

export interface SkeletonProps {
  type: 'title' | 'text' | 'thumbnail' | 'image'
}

export function Skeleton({ type }: SkeletonProps) {
  return <SkeletonElement type={type} />
}
