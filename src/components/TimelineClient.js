"use client";

import { useFriendship } from "@/context/FriendshipContext";
import { useMemo, useState } from "react";

const typeIcons = {
  Meetup: "🤝",
  Text: "💬",
  Video: "📹",
  Call: "📞",
};

export default function TimelineClient() {
  const { timeline } = useFriendship();
  const [type, setType] = useState("All");

  const entries = useMemo(() => {
    return timeline
      .filter((entry) => type === "All" || entry.type === type)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [timeline, type]);

  return (
    <div className="page-shell py-20">
      <h1 className="section-title">Timeline</h1>

      <select
        className="field mt-8 w-full max-w-[310px]"
        onChange={(event) => setType(event.target.value)}
        value={type}
      >
        <option value="All">Filter timeline</option>
        {["Meetup", "Text", "Call", "Video"].map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <section className="mt-5 space-y-5">
        {entries.map((entry) => (
          <article
            className="kk-card flex min-h-[72px] items-center gap-4 px-4 py-3"
            key={entry.id}
          >
            <span className="w-10 text-3xl leading-none">
              {typeIcons[entry.type] || "•"}
            </span>
            <div>
              <p className="text-base text-[#65748b]">
                <strong className="text-lg font-black text-[#2d5c47]">
                  {entry.title}
                </strong>{" "}
                with {entry.friendName}
              </p>
              <time className="mt-1 block text-sm font-bold text-[#65748b]">
                {formatDate(entry.date)}
              </time>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
