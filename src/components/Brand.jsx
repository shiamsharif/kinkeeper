import Link from "next/link";

export default function Brand({ className = "" }) {
  return (
    <Link
      className={`inline-flex text-[24px] font-black leading-none tracking-[-0.02em] ${className}`}
      href="/"
    >
      <span className="text-[#1f2937]">Keen</span>
      <span className="text-[#22513f]">Keeper</span>
    </Link>
  );
}
