"use client";

import friends from "@/data/friends.json";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "keenkeeper.timeline.v2";

const initialTimeline = [
  {
    id: "seed-1",
    friendId: "tom-baker",
    friendName: "Tom Baker",
    type: "Meetup",
    title: "Meetup",
    date: "2026-03-29",
  },
  {
    id: "seed-2",
    friendId: "sarah-chen",
    friendName: "Sarah Chen",
    type: "Text",
    title: "Text",
    date: "2026-03-28",
  },
  {
    id: "seed-3",
    friendId: "olivia-martinez",
    friendName: "Olivia Martinez",
    type: "Meetup",
    title: "Meetup",
    date: "2026-03-26",
  },
  {
    id: "seed-4",
    friendId: "aisha-patel",
    friendName: "Aisha Patel",
    type: "Video",
    title: "Video",
    date: "2026-03-23",
  },
  {
    id: "seed-5",
    friendId: "sarah-chen",
    friendName: "Sarah Chen",
    type: "Meetup",
    title: "Meetup",
    date: "2026-03-21",
  },
  {
    id: "seed-6",
    friendId: "marcus-johnson",
    friendName: "Marcus Johnson",
    type: "Call",
    title: "Call",
    date: "2026-03-19",
  },
  {
    id: "seed-7",
    friendId: "aisha-patel",
    friendName: "Aisha Patel",
    type: "Meetup",
    title: "Meetup",
    date: "2026-03-17",
  },
  {
    id: "seed-8",
    friendId: "olivia-martinez",
    friendName: "Olivia Martinez",
    type: "Text",
    title: "Text",
    date: "2026-03-13",
  },
  {
    id: "seed-9",
    friendId: "lisa-nakamura",
    friendName: "Lisa Nakamura",
    type: "Call",
    title: "Call",
    date: "2026-03-11",
  },
  {
    id: "seed-10",
    friendId: "sarah-chen",
    friendName: "Sarah Chen",
    type: "Call",
    title: "Call",
    date: "2026-03-11",
  },
  {
    id: "seed-11",
    friendId: "marcus-johnson",
    friendName: "Marcus Johnson",
    type: "Video",
    title: "Video",
    date: "2026-03-06",
  },
  {
    id: "seed-12",
    friendId: "ryan-obrien",
    friendName: "Ryan O'Brien",
    type: "Video",
    title: "Video",
    date: "2026-02-24",
  },
];

const FriendshipContext = createContext(null);

function getStoredTimeline() {
  if (typeof window === "undefined") return initialTimeline;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialTimeline;
  } catch {
    return initialTimeline;
  }
}

export function FriendshipProvider({ children }) {
  const [timeline, setTimeline] = useState(() => getStoredTimeline());
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(timeline));
    }
  }, [timeline]);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  function addInteraction(friend, type) {
    const entry = {
      id: `${friend.id}-${type.toLowerCase()}-${Date.now()}`,
      friendId: friend.id,
      friendName: friend.name,
      type,
      title: type,
      date: new Date().toISOString().slice(0, 10),
    };

    setTimeline((items) => [entry, ...items]);
    setToast(`${type} check-in added for ${friend.name}`);
  }

  const value = useMemo(
    () => ({ friends, timeline, addInteraction, toast }),
    [timeline, toast],
  );

  return (
    <FriendshipContext.Provider value={value}>
      {children}
      {toast ? (
        <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 rounded-2xl border border-[#d6c1a1] bg-[#272018] px-5 py-4 text-center text-sm font-bold text-white shadow-2xl">
          {toast}
        </div>
      ) : null}
    </FriendshipContext.Provider>
  );
}

export function useFriendship() {
  const context = useContext(FriendshipContext);

  if (!context) {
    throw new Error("useFriendship must be used inside FriendshipProvider");
  }

  return context;
}
