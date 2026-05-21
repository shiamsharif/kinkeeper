"use client";

import { useFriendship } from "@/context/FriendshipContext";
import { Cell, Pie, PieChart } from "recharts";

const colors = {
  Text: "#7c3aed",
  Call: "#1f513f",
  Video: "#39a96b",
};

export default function StatsClient() {
  const { timeline } = useFriendship();
  const data = ["Text", "Call", "Video"].map((type) => ({
    name: type,
    value: timeline.filter((entry) => entry.type === type).length,
  }));

  return (
    <div className="page-shell py-20">
      <h1 className="section-title">Friendship Analytics</h1>

      <section className="kk-card mt-8 min-h-[410px] p-8">
        <h2 className="text-xl font-bold text-[#1f513f]">
          By Interaction Type
        </h2>
        <div className="mt-4 flex flex-col items-center">
          <PieChart height={260} width={360}>
            <Pie
              cornerRadius={12}
              cy={130}
              data={data}
              dataKey="value"
              innerRadius={78}
              outerRadius={108}
              paddingAngle={7}
              nameKey="name"
              stroke="none"
            >
              {data.map((entry) => (
                <Cell fill={colors[entry.name]} key={entry.name} />
              ))}
            </Pie>
          </PieChart>
          <div className="mt-2 flex items-center justify-center gap-7 text-sm text-[#65748b]">
            {data.map((entry) => (
              <span className="inline-flex items-center gap-1.5" key={entry.name}>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: colors[entry.name] }}
                />
                {entry.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
