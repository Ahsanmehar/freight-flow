import React from "react";

export default function Header() {
  return (
    <header className="mb-8">
      {/* Header */}
      <h1 className="text-3xl font-semibold leading-tight">Request a Load</h1>
      <p className="text-gray-400 mt-1 max-w-xl">
        Fill out the details below and we'll match you with available carriers
      </p>
    </header>
  );
}
