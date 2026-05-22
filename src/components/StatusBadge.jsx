const labels = {
  overdue: "Overdue",
  "almost due": "Almost Due",
  "on-track": "On-Track",
};

const styles = {
  overdue: "bg-[#ef4444]",
  "almost due": "bg-[#f2ae3f]",
  "on-track": "bg-[#1f513f]",
};

export default function StatusBadge({ status }) {
  return (
    <span className={`status-badge ${styles[status] || styles["on-track"]}`}>
      {labels[status] || status}
    </span>
  );
}
