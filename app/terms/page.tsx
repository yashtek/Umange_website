import type { Metadata } from "next";
import LegalPage from "../legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions | Umanage",
  description: "Terms and conditions for using Umanage.",
};

export default function TermsPage() {
  return <LegalPage type="terms" />;
}
