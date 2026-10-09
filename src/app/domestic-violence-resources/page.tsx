import type { Metadata } from "next";
import { SurvivorResources } from "./survivor-resources";

export const metadata: Metadata = {
  title: "Domestic Violence Resources | Recursos de Violencia Doméstica | Golden Rose",
  description: "Confidential domestic violence support in English and Spanish: Safe Horizon, New York State hotlines, NYC Family Justice Centers, and emergency resources.",
};

export default function DomesticViolenceResourcesPage() {
  return <SurvivorResources />;
}
