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
  const renderNavLink = (link, mobile = false) => {
    const active =
      link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);

    return (
      <li key={link.href}>
        <Link
          className={`btn nav-link border-0 shadow-none ${
            mobile ? "justify-start" : ""
          } ${active ? "nav-link-active" : "btn-ghost"}`}
          href={link.href}
        >
          <Icon name={link.icon} />
          {link.label}
        </Link>
      </li>
    );
  };

  return (
    <header className="border-b border-[#dfe5ea] bg-white">
      <nav className="navbar mx-auto min-h-[70px] max-w-[1460px] px-4 py-0 sm:px-6 md:px-10 lg:px-20">
        <div className="navbar-start">
          <Brand className="text-[30px] sm:text-[34px] lg:text-[24px]" />
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal hidden gap-3 p-0 lg:flex">
            {links.map((link) => renderNavLink(link))}
          </ul>

          <div className="dropdown dropdown-end lg:hidden">
            <button
              aria-label="Open navigation menu"
              className="btn btn-ghost h-11 min-h-11 w-11 rounded-md p-0 text-[#1f2937]"
              tabIndex={0}
              type="button"
            >
              <Icon name="menu" className="h-7 w-7" />
            </button>
            <ul
              className="menu dropdown-content z-50 mt-3 w-56 rounded-lg border border-[#dfe5ea] bg-white p-2 shadow-xl"
              tabIndex={0}
            >
              {links.map((link) => renderNavLink(link, true))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
