import JackdawFull from "@/public/icons/logo-full.svg";

export default function KarakeepLogo({ height }: { height: number }) {
  return (
    <span className="flex items-center">
      <JackdawFull height={height} className={`fill-foreground`} />
    </span>
  );
}
