export default function FriendLoading() {
  return (
    <div className="page-shell py-10">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="h-[560px] animate-pulse rounded-[32px] bg-white/70" />
        <div className="space-y-5">
          <div className="h-32 animate-pulse rounded-[28px] bg-white/70" />
          <div className="h-48 animate-pulse rounded-[28px] bg-white/70" />
          <div className="h-56 animate-pulse rounded-[28px] bg-white/70" />
        </div>
      </div>
    </div>
  );
}
