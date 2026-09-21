import Image from "next/image";

type LogoProps = {
  variant?: "nav" | "footer";
  priority?: boolean;
};

export default function Logo({ variant = "nav", priority = false }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Pixel Pro Multimedia"
      width={908}
      height={322}
      priority={priority}
      className={variant === "footer" ? "logo-img logo-img-footer" : "logo-img"}
    />
  );
}
