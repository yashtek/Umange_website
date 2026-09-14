"use client";

import { X } from "lucide-react";
import { useState } from "react";

type LegalModalProps = { label: string; title: string; children: React.ReactNode };

export default function LegalModal({ label, title, children }: LegalModalProps) {
	const [open, setOpen] = useState(false);
	return <>
		<button type="button" className="footer-link" onClick={() => setOpen(true)}>{label}</button>
		{open && <div className="fixed inset-0 z-50 grid place-items-center bg-foreground/45 p-4" role="presentation" onClick={() => setOpen(false)}>
			<div className="w-full max-w-lg rounded-xl bg-background p-6 shadow-modal" role="dialog" aria-modal="true" aria-labelledby="legal-title" onClick={(event) => event.stopPropagation()}>
				<div className="flex items-start justify-between gap-4"><h2 id="legal-title" className="font-display text-xl font-extrabold text-foreground">{title}</h2><button type="button" className="grid h-8 w-8 place-items-center rounded-lg border border-border text-muted-foreground" aria-label="Close dialog" onClick={() => setOpen(false)}><X size={16} /></button></div>
				<div className="mt-5 text-sm leading-7 text-muted-foreground">{children}</div>
			</div>
		</div>}
	</>;
}
