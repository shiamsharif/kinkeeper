export default function Avatar({ friend, size = "lg" }) {
  const initials = friend.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div className={`avatar ${friend.avatar || "avatar-a"} avatar-${size}`}>
      <span>{initials}</span>
    </div>
  );
}
