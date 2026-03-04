export default function CheckoutLoading() {
  return (
    <div className="container-narrow py-8 sm:py-12 min-w-0" aria-live="polite" aria-busy="true">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-28 rounded-lg bg-stone-200" />
        <div className="h-4 w-72 rounded-lg bg-stone-100" />
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="h-6 w-40 rounded bg-stone-200" />
            <div className="h-24 rounded-xl bg-stone-100" />
            <div className="h-24 rounded-xl bg-stone-100" />
          </div>
          <div className="rounded-2xl border border-stone-200 p-6 space-y-4">
            <div className="h-6 w-36 rounded bg-stone-200" />
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-4 w-full rounded bg-stone-50" />
              ))}
            </div>
            <div className="h-10 w-full rounded-full bg-stone-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
