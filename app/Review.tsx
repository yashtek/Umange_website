import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { reviews } from "./landing-content";

export function Reviews() {
  return (
    <section id="reviews" className="section-space bg-secondary">
      <div className="page-container">
        <div className="reveal-section max-w-3xl">
          <span className="section-kicker">Trusted every day</span>
          <h2 className="section-title mt-4">What people say about Umanage</h2>
          <p className="section-copy mt-5">Built around the clarity and control that busy property teams need.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <article key={`${review.name}-${review.role}`} className="review-card reveal-section">
              <div className="flex items-start justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <Image src={review.image} alt="" width={900} height={1100} className="size-12 shrink-0 rounded-full object-cover object-top" />
                  <div className="min-w-0"><h3 className="truncate font-display font-bold text-foreground">{review.name}</h3><p className="text-sm text-muted-foreground">{review.role}</p></div>
                </div>
                <Quote className="size-8 shrink-0 text-primary/20" aria-hidden="true" />
              </div>
              <div className="mt-5 flex gap-1" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: review.rating }).map((_, i) => <Star key={i} className="size-4 fill-warning text-warning" aria-hidden="true" />)}</div>
              <p className="mt-4 leading-7 text-card-foreground">“{review.review}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;