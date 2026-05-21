export default function SummaryCards({ friends }) {
  const cards = [
    { label: "Total Friends", value: friends.length },
    {
      label: "On Track",
      value: friends.filter((friend) => friend.status === "on-track").length,
    },
    {
      label: "Need Attention",
      value: friends.filter((friend) => friend.status !== "on-track").length,
    },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <section className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card) => (
        <article className="kk-card flex h-[124px] flex-col items-center justify-center" key={card.label}>
          <p className="text-[32px] font-black leading-none text-[#1f513f]">
            {card.value}
          </p>
          <p className="mt-3 text-base text-[#65748b]">{card.label}</p>
        </article>
      ))}
    </section>
  );
}
