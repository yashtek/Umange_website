// PhoneMockup.tsx

import { cn } from "@/lib/utils";
import Image from "next/image";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

export function PhoneMockup({
  src,
  alt,
  className,
  priority = false,
}: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative aspect-[768/1456] overflow-hidden rounded-[2.8rem]",
        "border-[6px] border-slate-950 bg-slate-950",
        "shadow-[0_25px_70px_-20px_rgba(15,23,42,0.35)]",
        className
      )}
    >
      {/* Top speaker / Dynamic island */}
      <div
        className="
          absolute
          left-1/2
          top-2
          z-20
          h-3
          w-20
          -translate-x-1/2
          rounded-full
          bg-slate-950
        "
        aria-hidden="true"
      />

      {/* Screen */}
      <div className="relative h-full w-full overflow-hidden rounded-[2.35rem] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 60vw, 420px"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}