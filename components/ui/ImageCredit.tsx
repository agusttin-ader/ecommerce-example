import type { ImageCredit as ImageCreditType } from "@/lib/types";

interface ImageCreditProps {
  credit: ImageCreditType;
  /** Si true, texto más pequeño (para cards). Por defecto tamaño normal para detalle. */
  compact?: boolean;
  /** Clase extra para el texto (ej. "text-white" en cards sobre imagen oscura). */
  className?: string;
  /** Si true, no renderiza enlace (solo texto). Usar cuando el crédito va dentro de otro <a>, ej. en ProductCard. */
  noLink?: boolean;
}

/**
 * Muestra el crédito de la imagen (ej. Unsplash).
 * Solo renderizar cuando el producto tiene imageCredit definido.
 */
export function ImageCredit({ credit, compact, className = "", noLink }: ImageCreditProps) {
  const base = compact ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm";
  const textClass = className || "text-stone-400";
  const linkClass = className ? "underline hover:opacity-90 text-inherit" : "underline hover:text-stone-500 text-stone-400";
  return (
    <p
      className={`${base} ${textClass} leading-tight`}
      aria-label={`Foto por ${credit.name} en Unsplash`}
    >
      Foto{" "}
      {noLink ? (
        <span>{credit.name}</span>
      ) : (
        <a
          href={credit.url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {credit.name}
        </a>
      )}{" "}
      en Unsplash
    </p>
  );
}
