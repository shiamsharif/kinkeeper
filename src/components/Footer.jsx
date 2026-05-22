import Image from "next/image";

const socialLinks = [
  { label: "Instagram", icon: "/assets/instagram.png" },
  { label: "Facebook", icon: "/assets/facebook.png" },
  { label: "X", icon: "/assets/twitter.png" },
];

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#1f513f] text-white">
      <div className="mx-auto max-w-[1140px] px-6 py-16 text-center">
        <h2 className="text-6xl font-black tracking-[-0.03em] md:text-7xl">
          KeenKeeper
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base text-white/75">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <h3 className="mt-7 text-xl font-bold">Social Links</h3>
        <div className="mt-5 flex justify-center gap-6">
          {socialLinks.map((social) => (
            <span
              className="grid h-20 w-20 place-items-center rounded-full bg-white"
              key={social.label}
            >
              <Image src={social.icon} alt={social.label} width={38} height={38} />
            </span>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-white/55">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p>© 2026 KeenKeeper. All rights reserved.</p>
            <div className="flex justify-center gap-10">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
