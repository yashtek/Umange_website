import { users } from "./landing-content";
import Image from "next/image";

export function UsersSlider() {
  const loopUsers = [...users, ...users];

  return (
    <section
      id="users"
      className="section-space overflow-hidden bg-background"
    >
      <div className="page-container text-center reveal-section">
        <span className="section-kicker">Made for real operators</span>

        <h2 className="section-title mx-auto mt-4 max-w-3xl">
          Built for the people who manage it all
        </h2>

        <p className="section-copy mx-auto mt-5 max-w-2xl">
          From one building to a growing portfolio, Umanage helps every kind
          of property and service manager stay in control.
        </p>
      </div>

      <div className="relative mt-12">
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent md:w-40" />

        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent md:w-40" />

        <div className="overflow-hidden">
          <div
            className="flex w-max animate-users-marquee gap-5 hover:[animation-play-state:paused]"
            role="list"
            aria-label="People using Umanage"
          >
            {loopUsers.map((user, index) => {
              const isDuplicate = index >= users.length;

              return (
                <article
                  key={`${user.name}-${index}`}
                  role="listitem"
                  aria-hidden={isDuplicate}
                  className="
                    group
                    w-[280px]
                    shrink-0
                    overflow-hidden
                    rounded-2xl
                    border
                    border-border/60
                    bg-card
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-primary/30
                    hover:shadow-xl
                    sm:w-[320px]
                  "
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={user.image}
                      alt={
                        isDuplicate
                          ? ""
                          : `${user.name}, ${user.role}`
                      }
                      width={900}
                      height={1100}
                      sizes="320px"
                      className="
                        h-64
                        w-full
                        object-cover
                        object-top
                        transition-transform
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Image gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  <div className="p-5 text-left">
                    <p className="font-display text-lg font-bold text-foreground">
                      {user.name}
                    </p>

                    <p className="mt-1 text-sm font-semibold text-primary">
                      {user.role}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
                      {user.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default UsersSlider;