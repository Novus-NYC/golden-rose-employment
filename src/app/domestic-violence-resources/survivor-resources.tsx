"use client";

import { useLanguage } from "../language-context";
import { survivorCopy } from "../survivor-content";
import { QuickExitButton } from "../quick-exit";

export function SurvivorResources() {
  const { language, setLanguage } = useLanguage();
  const copy = survivorCopy[language];

  return (
    <main id="main-content" className="survivor-resources">
      <section className="page-hero resource-hero">
        <div className="resource-tools">
          <div className="resource-language-switch" role="group" aria-label={language === "en" ? "Resource language" : "Idioma de los recursos"}>
            <button type="button" lang="en" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>English</button>
            <button type="button" lang="es" aria-pressed={language === "es"} onClick={() => setLanguage("es")}>Español</button>
          </div>
          <QuickExitButton />
        </div>
        <p className="eyebrow"><span aria-hidden="true">💜 </span>{copy.eyebrow}</p>
        <h1>{copy.title}</h1>
        <p className="lede">{copy.introduction}</p>
        <p className="resource-recognition">{copy.recognition}</p>
        <p className="resource-solidarity">{copy.solidarity}</p>
      </section>

      <section className="section resource-body">
        <div className="resource-emergency" aria-labelledby="emergency-title">
          <div>
            <h2 id="emergency-title">{copy.emergencyTitle}</h2>
            <p>{copy.emergencyText}</p>
          </div>
          <div className="resource-actions">
            <a className="button primary" href="tel:911">{copy.call911}</a>
            <a className="button secondary" href="sms:911">{copy.text911}</a>
          </div>
        </div>

        <div className="resource-introduction">
          <h2>{copy.safeHorizonTitle}</h2>
          <p>{copy.safeHorizonText}</p>
          <a className="resource-link" href="https://www.safehorizon.org/es/" lang="es">{copy.spanish} <span aria-hidden="true">↗</span></a>
        </div>

        <div className="section-heading">
          <h2>{copy.resourcesTitle}</h2>
          <p>{copy.resourcesText}</p>
        </div>
        <div className="resource-grid">
          {copy.resources.map((resource) => (
            <article className="resource-card" key={resource.id} aria-labelledby={`${resource.id}-title`}>
              <h3 id={`${resource.id}-title`}>{resource.title}</h3>
              <p>{resource.description}</p>
              {"phone" in resource && <a className="resource-phone" href={resource.phoneHref}><span>{copy.call}</span>{resource.phone}</a>}
              {"textNumber" in resource && <a className="resource-phone" href={resource.textHref}><span>{copy.text}</span>{resource.textNumber}</a>}
              <div className="resource-links">
                <a className="resource-link" href={resource.url}>{copy.website} <span aria-hidden="true">↗</span></a>
                {"chatUrl" in resource && <a className="resource-link" href={resource.chatUrl}>{copy.chat} <span aria-hidden="true">↗</span></a>}
              </div>
            </article>
          ))}
        </div>
        <div className="resource-closing">
          <span aria-hidden="true">💜</span>
          <p>{copy.closing}</p>
        </div>
        <p className="resource-note">{copy.exitNote}</p>
        <p className="resource-note">{copy.sources}</p>
      </section>
    </main>
  );
}
