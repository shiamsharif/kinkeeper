"use client";

import { useFriendship } from "@/context/FriendshipContext";
import Avatar from "./Avatar";
import Icon from "./Icon";
import StatusBadge from "./StatusBadge";

const actions = [
  { type: "Call", icon: "call" },
  { type: "Text", icon: "text" },
  { type: "Video", icon: "video" },
];

const actionButtons = [
  { label: "Snooze 2 Weeks", icon: "snooze", danger: false },
  { label: "Archive", icon: "archive", danger: false },
  { label: "Delete", icon: "delete", danger: true },
];

export default function FriendDetailClient({ friend }) {
  const { addInteraction } = useFriendship();

  return (
    <div className="wide-shell py-20">
      <div className="grid gap-6 lg:grid-cols-[350px_1fr]">
        <aside>
          <article className="kk-card flex h-[285px] flex-col items-center justify-center p-7 text-center">
            <Avatar friend={friend} size="xl" />
            <h1 className="mt-4 text-xl font-black tracking-[-0.02em] text-[#1f2937]">
              {friend.name}
            </h1>
            <div className="mt-3">
              <StatusBadge status={friend.status} />
            </div>
            <div className="mt-3">
              {friend.tags.slice(0, 1).map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base font-semibold italic text-[#65748b]">
              &quot;{friend.bio}&quot;
            </p>
            <p className="mt-3 text-sm text-[#65748b]">
              Preferred: {friend.preferred}
            </p>
          </article>

          <div className="mt-4 space-y-2">
            {actionButtons.map((button) => (
              <button
                className={`secondary-button h-[52px] w-full text-base ${
                  button.danger ? "text-[#ef4444]" : ""
                }`}
                key={button.label}
                type="button"
              >
                <Icon name={button.icon} />
                {button.label}
              </button>
            ))}
          </div>
        </aside>

        <section className="space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            <StatCard label="Days Since Contact" value={friend.days_since_contact} />
            <StatCard label="Goal (Days)" value={friend.goal_days || 30} />
            <StatCard label="Next Due" value={formatDate(friend.next_due_date)} />
          </div>

          <article className="kk-card flex min-h-[122px] items-center justify-between gap-4 p-6">
            <div>
              <h2 className="text-xl font-bold text-[#1f513f]">
                Relationship Goal
              </h2>
              <p className="mt-5 text-lg text-[#65748b]">
                Connect every{" "}
                <strong className="font-black text-[#1f2937]">
                  {friend.goal_days || 30} days
                </strong>
              </p>
            </div>
            <button className="secondary-button min-h-9 px-4" type="button">
              Edit
            </button>
          </article>

          <article className="kk-card p-6">
            <h2 className="text-xl font-bold text-[#1f513f]">Quick Check-In</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {actions.map((action) => (
                <button
                  className="flex h-[96px] flex-col items-center justify-center rounded-md border border-[#dfe5ea] bg-[#f7f9fb] text-lg font-medium text-[#1f2937]"
                  key={action.type}
                  onClick={() => addInteraction(friend, action.type)}
                  type="button"
                >
                  <Icon name={action.icon} className="mb-2 text-3xl" />
                  {action.type}
                </button>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <article className="kk-card flex h-[136px] flex-col items-center justify-center p-5 text-center">
      <p className="text-[32px] font-black leading-none text-[#1f513f]">
        {value}
      </p>
      <p className="mt-4 text-lg text-[#65748b]">{label}</p>
    </article>
  );
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}
