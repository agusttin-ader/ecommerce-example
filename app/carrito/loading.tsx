export default function CarritoLoading() {
  return (
    <div className="container-narrow py-8 sm:py-12 min-w-0" aria-live="polite" aria-busy="true">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-32 rounded-lg bg-stone-200" />
        <div className="h-4 w-64 rounded-lg bg-stone-100" />
        <div className="rounded-2xl border border-stone-200 p-4 sm:p-6 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4 py-4 border-b border-stone-100">
              <div className="w-20 h-20 rounded-xl bg-stone-100 shrink-0" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-3/4 rounded bg-stone-100" />
                <div className="h-8 w-28 rounded-lg bg-stone-50" />
              </div>
              <div className="h-5 w-16 rounded bg-stone-100" />
            </div>
          ))}
        </div>
        <div className="rounded-2xl border border-stone-200 p-6">
          <div className="h-10 w-full rounded-full bg-stone-200" />
        </div>
      </div>
    </div>
  );
}
