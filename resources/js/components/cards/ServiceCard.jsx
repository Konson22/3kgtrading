import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      {service.image && (
        <div className="aspect-[16/10] w-full overflow-hidden bg-neutral-100">
          <img
            src={service.image}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-4 px-6 py-6">
        <h3 className="text-lg font-semibold leading-none text-neutral-800">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600">
          {service.shortDescription}
        </p>
        <Link
          to={`/services/${service.slug}`}
          className="text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
