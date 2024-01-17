"use client";

import { useIsClient } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { ToggleSkeleton } from "./toggle";
import { RecommendedSkeleton } from "./recommended";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  // const [isClient, setIsClient] = useState(false); // usehooks.ts already has a hook for this so I can replace it.
  const isClient = useIsClient();
  const { collapsed } = useSidebar((state) => state);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []); This way useEffect isn't required as well.

  if (!isClient) {
    return (
      <aside className='"fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50"'>
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  }

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
