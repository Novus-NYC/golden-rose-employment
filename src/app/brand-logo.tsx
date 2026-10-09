/* eslint-disable @next/next/no-img-element */

import { logoImage, logoLockup } from "./site-content";

export function BrandLogo({ className = "", lockup = false }: { className?: string; lockup?: boolean }) {
  return (
    <span className={`brand-logo ${className}`}>
      <img className="brand-logo-standard" src={lockup ? logoLockup : logoImage} alt="Golden Rose logo" />
      <img className="brand-logo-purple" src="/brand/mark-purple.png" alt="Golden Rose purple logo" />
      {lockup && <span className="brand-logo-purple campaign-wordmark">Golden Rose<small>Agencia de Empleos NYC</small></span>}
    </span>
  );
}
