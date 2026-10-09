"use client";

import { useLanguage } from "./language-context";
import { survivorCopy } from "./survivor-content";

export function QuickExitButton({ className = "quick-exit" }: { className?: string }) {
  const { language } = useLanguage();

  return (
    <button className={className} type="button" onClick={() => window.location.replace("https://www.google.com/")}>
      {survivorCopy[language].exit} <span aria-hidden="true">↗</span>
    </button>
  );
}
