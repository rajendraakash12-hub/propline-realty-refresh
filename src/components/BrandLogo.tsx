/** Locally bundled Propline Realty logo. */
export function BrandLogo({ className = "h-14 w-auto" }: { className?: string }) {
  return <img src="/propline-realty-logo.png" alt="Propline Realty Services Pvt. Ltd." className={`object-contain ${className}`} />;
}
