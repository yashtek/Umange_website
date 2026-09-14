import Image from "next/image";

type BrandLogoProps = { inverse?: boolean; compact?: boolean };

export function BrandLogo({
  inverse = false,
  compact = false,
}: BrandLogoProps) {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5"
      aria-label="UManage home"
    >
      <Image
        src="/logo.jpeg"
        alt=""
        width={compact ? 32 : 36}
        height={compact ? 32 : 36}
        className={`rounded-xl object-cover shadow-brand ${compact ? "h-8 w-8" : "h-9 w-9"}`}
      />
      <span
        className={`font-display text-lg font-extrabold tracking-tight ${inverse ? "text-footer-foreground" : "text-foreground"}`}
      >
        UManage
      </span>
    </a>
  );
}

export default BrandLogo;
