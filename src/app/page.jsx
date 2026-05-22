import FriendCard from "@/components/FriendCard";
import HomeHero from "@/components/HomeHero";
import SummaryCards from "@/components/SummaryCards";
import friends from "@/data/friends.json";

export default function Home() {
  return (
    <div className="page-shell py-20">
      <HomeHero />
      <SummaryCards friends={friends} />
      <section className="mt-9 border-t border-[#dfe5ea] pt-9">
        <h2 className="mb-5 text-2xl font-black tracking-[-0.02em] text-[#1f2937]">
          Your Friends
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </div>
  );
}
