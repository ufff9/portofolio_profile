"use client";

import { useSyncExternalStore } from "react";
import { GitHubCalendar } from "react-github-calendar";

const noopSubscribe = () => () => {};

export default function GithubGraph({ username }: { username: string }) {
  // Server & render hydration pertama -> false. Setelah tampil di browser -> true.
  const mounted = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );

  // Placeholder dengan tinggi mirip kalender, supaya halaman tidak "melompat"
  if (!mounted) return <div className="min-h-[140px]" aria-hidden="true" />;

  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username="ufff9"
        colorScheme="dark"
        blockSize={11}
        blockMargin={4}
        theme={{
          dark: ["#161616", "#3a3a3a", "#6b6b6b", "#a8a8a8", "#f5f5f2"],
        }}
      />
    </div>
  );
}
