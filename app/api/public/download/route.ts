import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { PLAY_STORE_URL } from "../../../landing-content";

const downloadSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
});

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

export async function POST(request: Request) {
  let payload: z.infer<typeof downloadSchema>;

  try {
    payload = downloadSchema.parse(await request.json());
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  try {
    const resendKey = process.env.RESEND_KEY;
    if (!resendKey) {
      console.error("RESEND_KEY is not configured");
      return NextResponse.json({ ok: false, error: "Email service is not configured" }, { status: 503 });
    }

    const resend = new Resend(resendKey);
    const safeName = escapeHtml(payload.name);
    const from = process.env.RESEND_FROM ?? "Umanage <onboarding@resend.dev>";
    const requestOrigin = new URL(request.url).origin;
    const configuredLogoUrl = process.env.RESEND_LOGO_URL;
    const configuredSiteUrl = process.env.SITE_URL ?? process.env.NEXT_PUBLIC_SITE_URL;
    const logoUrl = configuredLogoUrl ?? (configuredSiteUrl ? new URL("/logo.jpeg", configuredSiteUrl).toString() : undefined);
    if (!logoUrl || /localhost|127\.0\.0\.1/.test(logoUrl)) {
      console.error("Set RESEND_LOGO_URL or SITE_URL to a public URL before sending email", { requestOrigin });
      return NextResponse.json({ ok: false, error: "A public logo URL is not configured" }, { status: 503 });
    }
    const { error } = await resend.emails.send({
      from,
      to: [payload.email],
      subject: "Thank you for your interest in Umanage",
      text: `Hi ${payload.name},

Thank you for showing interest in Umanage.

Umanage helps you manage your rental business from one place, including properties, residents, collections, maintenance, operations, and important records.

Get Umanage on Google Play: ${PLAY_STORE_URL}

Best,
The Umanage team`,
      html: `<!doctype html>
<html lang="en">
  <body style="margin:0;background:#f6f8fc;color:#17213a;font-family:Arial,sans-serif;line-height:1.6">
    <div style="max-width:620px;margin:0 auto;padding:32px 16px">
      <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:14px;padding:36px">
        <img src="${logoUrl}" alt="Umanage" width="52" height="52" style="display:block;width:52px;height:52px;border-radius:12px;object-fit:cover" />
        <h1 style="margin:28px 0 10px;color:#17213a;font-size:28px;line-height:1.2">Thank you for showing interest in Umanage, ${safeName}.</h1>
        <p style="color:#53627a">We are glad to have you with us. Umanage gives rental and property teams one clear place to run their day-to-day business.</p>
        <h2 style="margin:28px 0 12px;color:#17213a;font-size:18px">Manage your rental business with clarity</h2>
        <ul style="padding-left:20px;color:#53627a">
          <li>Manage multiple properties from one view</li>
          <li>Organize residents, tenants, and customer details</li>
          <li>Track rent, collections, and payment status</li>
          <li>Follow maintenance requests and daily operations</li>
          <li>Keep agreements, invoices, and records accessible</li>
        </ul>
        <a href="${PLAY_STORE_URL}" style="display:inline-block;margin-top:18px;background:#315fd8;color:#ffffff;text-decoration:none;border-radius:8px;padding:13px 20px;font-weight:700">Get Umanage on Google Play</a>
        <p style="margin:28px 0 0;color:#7a879b;font-size:13px">We will share useful product updates as Umanage grows.</p>
      </div>
      <p style="text-align:center;color:#7a879b;font-size:12px">The Umanage team</p>
    </div>
  </body>
</html>`,
    });

    if (error) {
      console.error("Resend email failed", error);
      return NextResponse.json({ ok: false, error: "Unable to send confirmation email" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Download signup failed", error);
    return NextResponse.json({ ok: false, error: "Unable to send confirmation email" }, { status: 500 });
  }
}
