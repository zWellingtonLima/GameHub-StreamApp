import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex  items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-1 mr-10 shrink-0 lg:shrink lg:mr-0">
          <Image src="/spooky.svg" width={32} height={32} alt="Gamehub" />
        </div>
        <div className={cn(font.className, "font-semibold hidden lg:block")}>
          <p className="text-lg">Gamehub</p>
          <p className="text-xs">Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};
