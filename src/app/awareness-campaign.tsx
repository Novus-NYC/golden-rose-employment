"use client";

import Link from "next/link";
import { useEffect } from "react";
import { syncAwarenessTheme } from "./awareness-theme";
import { useLanguage } from "./language-context";
import { survivorCopy } from "./survivor-content";

export function AwarenessCampaign() {
  const { language } = useLanguage();
  const copy = survivorCopy[language];

  useEffect(() => {
    syncAwarenessTheme();
    const updateTheme = () => syncAwarenessTheme();
    const timer = window.setInterval(updateTheme, 60_000);
    document.addEventListener("visibilitychange", updateTheme);
    return () => {
      window.clearInterval(timer);
      document.removeEventListener("visibilitychange", updateTheme);
    };
  }, []);

  return (
    <div className="awareness-banner">
      <span aria-hidden="true">💜</span>
      <p>{copy.campaign}</p>
      <Link href="/domestic-violence-resources">{copy.viewResources} <span aria-hidden="true">↗</span></Link>
    </div>
  );
}

export function SurvivorResourceCallout() {
  const { language } = useLanguage();
  const copy = survivorCopy[language];

  return (
    <section className="section survivor-callout" aria-labelledby="survivor-callout-title">
      <div>
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2 id="survivor-callout-title">{copy.calloutTitle}</h2>
        <p>{copy.calloutText}</p>
      </div>
      <Link className="button primary" href="/domestic-violence-resources">
        {copy.viewResources}
      </Link>
    </section>
  );
}
