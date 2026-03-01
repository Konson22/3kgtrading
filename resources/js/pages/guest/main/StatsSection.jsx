import React from "react";
import { stats } from "@/data/site";

export default function StatsSection() {
  return (
    <section className="border-b border-neutral-200 bg-neutral-100 py-14 lg:py-16">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((item, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-medium text-neutral-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
