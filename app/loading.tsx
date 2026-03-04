export default function Loading() {
  return (
    <div className="container-narrow py-12 sm:py-16 min-w-0" aria-live="polite" aria-busy="true">
      <div className="space-y-6">
        <div className="h-8 w-48 rounded-lg bg-stone-200 animate-pulse" />
        <div className="h-4 w-full max-w-md rounded-lg bg-stone-100 animate-pulse" />
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl border border-stone-200 overflow-hidden">
              <div className="aspect-[4/3] bg-stone-100 shimmer-bg rounded-t-2xl" />
              <div className="p-3 sm:p-4 space-y-2">
                <div className="h-4 w-3/4 rounded bg-stone-100" />
                <div className="h-3 w-full rounded bg-stone-50" />
                <div className="h-3 w-1/2 rounded bg-stone-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
