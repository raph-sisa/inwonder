import { lazy, Suspense } from 'react'

const MemojiModelLazy = lazy(() =>
  import('./MemojiModel').then(m => ({ default: m.MemojiModel }))
)

export function MemojiHead({ className = '' }: { className?: string }) {
  return (
    <Suspense fallback={<div className={className} />}>
      <MemojiModelLazy className={className} />
    </Suspense>
  )
}
