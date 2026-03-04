export default function ProductosLoading() {
  return (
    <div className="container-narrow py-8 sm:py-12 min-w-0" aria-live="polite" aria-busy="true">
      <div className="space-y-6">
        <div className="h-8 w-40 rounded-lg bg-stone-200 animate-pulse" />
        <div className="h-4 max-w-sm rounded-lg bg-stone-100 animate-pulse" />
        <div className="flex gap-3">
          <div className="h-12 flex-1 rounded-xl bg-stone-100 animate-pulse" />
          <div className="h-12 w-40 rounded-xl bg-stone-100 animate-pulse" />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl border border-stone-200 overflow-hidden">
              <div className="aspect-[4/3] bg-stone-100 shimmer-bg rounded-t-2xl" />
              <div className="p-2.5 sm:p-4 space-y-2">
                <div className="h-3.5 w-full rounded bg-stone-100" />
                <div className="h-3 w-full rounded bg-stone-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
