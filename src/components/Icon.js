const icons = {
  home: "⌂",
  timeline: "◷",
  stats: "⌁",
  snooze: "♙",
  archive: "▰",
  delete: "♲",
  call: "☏",
  text: "▣",
  video: "▰",
};

export default function Icon({ name, className = "" }) {
  return (
    <span aria-hidden="true" className={`kk-icon ${className}`}>
      {icons[name] || "•"}
    </span>
  );
}
