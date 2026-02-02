import { useEffect, useState } from "preact/hooks";
import { LoginDrawer } from "../LoginDrawer/LoginDrawer";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export type AppShellSize = "mobile" | "desktop";

export interface AppShellProps {
  size?: AppShellSize;
}

export function AppShell({ size }: AppShellProps) {
  const [resolvedSize, setResolvedSize] = useState<AppShellSize>(size ?? "desktop");

  useEffect(() => {
    if (size) {
      setResolvedSize(size);
      return;
    }

    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateSize = () => {
      setResolvedSize(mediaQuery.matches ? "mobile" : "desktop");
    };

    updateSize();
    mediaQuery.addEventListener("change", updateSize);

    return () => {
      mediaQuery.removeEventListener("change", updateSize);
    };
  }, [size]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-end">
          <ThemeToggle />
        </div>
      </nav>
      <main className="min-h-[calc(100vh-72px)] flex items-center justify-center px-6 py-8">
        <LoginDrawer size={resolvedSize} />
      </main>
    </div>
  );
}
