import type { Metadata } from "next";
import LegalPage from "../legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Umanage",
  description: "Privacy policy for Umanage.",
};

export default function PrivacyPage() {
  return <LegalPage type="privacy" />;
}
