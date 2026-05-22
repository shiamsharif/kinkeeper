const iconPaths = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-7h5v7" />
    </>
  ),
  timeline: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  stats: (
    <>
      <path d="M4 19h16" />
      <path d="M5 16l4.5-5 3.5 3 5-7" />
      <path d="M18 7h-4" />
    </>
  ),
  snooze: (
    <>
      <path d="M12 3.5a3 3 0 0 1 3 3v2.25c0 .8.28 1.58.8 2.18L17 12.35V14H7v-1.65l1.2-1.42c.52-.6.8-1.38.8-2.18V6.5a3 3 0 0 1 3-3Z" />
      <path d="M10 17h4" />
      <path d="M8 4.5 6.5 3" />
      <path d="M16 4.5 17.5 3" />
    </>
  ),
  archive: (
    <>
      <path d="M4.5 6.5h15v3h-15z" />
      <path d="M6 9.5v8h12v-8" />
      <path d="M9.5 13h5" />
    </>
  ),
  delete: (
    <>
      <path d="M9 5h6" />
      <path d="M5.5 8h13" />
      <path d="M8 8l.7 11h6.6L16 8" />
      <path d="M10.5 11.5v4" />
      <path d="M13.5 11.5v4" />
    </>
  ),
  call: (
    <>
      <path d="M7.2 4.5 10 7.3 8.4 10c1.1 2.2 2.9 4 5.1 5.1l2.7-1.6 2.8 2.8c.35.35.43.9.18 1.33-.72 1.24-1.95 1.93-3.33 1.67C10 18.2 5.8 14 4.7 8.15c-.26-1.38.43-2.61 1.67-3.33.43-.25.98-.17 1.33.18Z" />
    </>
  ),
  text: (
    <>
      <path d="M5 6.5h14v10H9l-4 3v-13Z" />
      <path d="M8.5 10h7" />
      <path d="M8.5 13h4.5" />
    </>
  ),
  video: (
    <>
      <path d="M4.5 7.5h10v9h-10z" />
      <path d="m14.5 10 5-2.5v9l-5-2.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
};

export default function Icon({ name, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={`kk-icon ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.2"
      viewBox="0 0 24 24"
    >
      {iconPaths[name] || <circle cx="12" cy="12" r="2" />}
    </svg>
  );
}
