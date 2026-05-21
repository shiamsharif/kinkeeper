export default function Loading() {
  return (
    <div className="page-shell py-10">
      <div className="h-72 animate-pulse rounded-[36px] bg-white/70" />
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            className="h-72 animate-pulse rounded-[28px] bg-white/70"
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
