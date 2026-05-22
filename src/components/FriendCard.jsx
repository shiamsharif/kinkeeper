import Link from "next/link";
import Avatar from "./Avatar";
import StatusBadge from "./StatusBadge";

export default function FriendCard({ friend }) {
  return (
    <Link
      className="kk-card block h-[230px] p-6 text-center transition hover:-translate-y-0.5 hover:shadow-md"
      href={`/friends/${friend.id}`}
    >
      <div className="flex justify-center">
        <Avatar friend={friend} />
      </div>
      <h3 className="mt-4 truncate text-xl font-black tracking-[-0.02em] text-[#1f2937]">
        {friend.name}
      </h3>
      <p className="mt-2 text-xs font-semibold text-[#65748b]">
        {friend.days_since_contact}d ago
      </p>
      <div className="mt-3 flex min-h-5 justify-center gap-2">
        {friend.tags.slice(0, 2).map((tag) => (
          <span className="tag" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3">
        <StatusBadge status={friend.status} />
      </div>
    </Link>
  );
}
