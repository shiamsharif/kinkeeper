import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[65vh] items-center justify-center py-16">
      <div className="max-w-xl text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-[#2d241b] sm:text-6xl">
          This friendship note wandered off.
        </h1>
        <p className="mt-4 text-[#756858]">
          The page you opened does not exist in KeenKeeper. Head home and pick
          up from your circle overview.
        </p>
        <Link className="primary-button mx-auto mt-7 w-fit" href="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
