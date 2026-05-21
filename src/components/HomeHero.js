import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="mx-auto max-w-[760px] text-center">
      <h1 className="text-[44px] font-black leading-tight tracking-[-0.035em] text-[#1f2937] md:text-[56px]">
        Friends to keep close in your life
      </h1>
      <p className="mx-auto mt-4 max-w-[540px] text-base leading-6 text-[#65748b]">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <Link className="primary-button mt-8" href="/friends/emma-wilson">
        + Add a Friend
      </Link>
    </section>
  );
}
