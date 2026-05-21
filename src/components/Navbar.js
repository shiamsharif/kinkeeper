"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Brand from "./Brand";
import Icon from "./Icon";

const links = [
  { href: "/", label: "Home", icon: "home", homeOnly: true },
  { href: "/timeline", label: "Timeline", icon: "timeline" },
  { href: "/stats", label: "Stats", icon: "stats" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#dfe5ea] bg-white">
      <nav className="mx-auto flex h-[70px] max-w-[1460px] items-center justify-between px-6 md:px-20">
        <Brand />
        <div className="flex items-center gap-2">
          {links
            .filter((link) => pathname === "/" || !link.homeOnly)
            .map((link) => {
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
