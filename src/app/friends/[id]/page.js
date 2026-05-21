import FriendDetailClient from "@/components/FriendDetailClient";
import friends from "@/data/friends.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return friends.map((friend) => ({ id: friend.id }));
}

export default async function FriendDetailPage({ params }) {
  const { id } = await params;
  const friend = friends.find((item) => item.id === id);

  if (!friend) {
    notFound();
  }

  return <FriendDetailClient friend={friend} />;
}
