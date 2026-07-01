import Image from "next/image";

type LogoProps = {
  className?: string;
};

/**
 * Monograma original: um arco dental minimalista desenhado como linha única,
 * inspirado em diagramas ópticos de instrumentos de precisão (Leica) —
 * não reproduz o ícone do cliente, apenas a ideia de "arco" e "linha".
 */
export function Logo({ className = "h-10 w-10" }: LogoProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src="/images/logo-original-transparent.png"
        alt="Logo Dr. André Gusman"
        fill
        className="object-contain"
        unoptimized
      />
    </div>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display text-lg tracking-tight ${className}`}>
      Dr. André Gusman
    </span>
  );
}
