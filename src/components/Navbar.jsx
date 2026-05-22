"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";
import Icon from "./Icon";

const links = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/timeline", label: "Timeline", icon: "timeline" },
  { href: "/stats", label: "Stats", icon: "stats" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#dfe5ea] bg-white">
      <nav className="mx-auto flex h-17.5 max-w-365 items-center justify-between px-6 md:px-20">
        <Brand />
        <div className="flex items-center gap-2">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                className={`nav-link ${active ? "nav-link-active" : ""}`}
                href={link.href}
                key={link.href}
              >
                <Icon name={link.icon} />
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
