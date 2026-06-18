import Nav from "./components/Nav";
import DragonMark from "./components/DragonMark";
import DisplayCase, { type CaseItem } from "./components/DisplayCase";

const MAPS =
  "https://www.google.com/maps?q=7+N+Harrison+St,+East+Orange,+NJ+07017";

const CASE: CaseItem[] = [
  { img: "glass.jpg", aisle: "Aisle 01", name: "Glass & Water Pipes", note: "Bongs, rigs, and the pieces up front." },
  { img: "pipes.jpg", aisle: "Aisle 02", name: "Hand Pipes & Bowls", note: "Spoons, chillums, and replacement bowls." },
  { img: "hookah.jpg", aisle: "Aisle 03", name: "Hookah & Shisha", note: "Setups, hoses, coals, and the flavors." },
  { img: "vape.jpg", aisle: "Aisle 04", name: "Vapes & Disposables", note: "Disposables, pods, mods, and juice." },
  { img: "rolling.jpg", aisle: "Aisle 05", name: "Wraps & Rolling", note: "Wraps, cones, papers, and trays." },
  { img: "accessories.jpg", aisle: "Aisle 06", name: "Lighters & Torches", note: "Torches, clippers, and the small stuff." },
];

const HOURS = [
  ["Monday", "9 AM – 11 PM"],
  ["Tuesday", "9 AM – 11 PM"],
  ["Wednesday", "9 AM – 11 PM"],
  ["Thursday", "9 AM – 11 PM"],
  ["Friday", "9 AM – 11 PM"],
  ["Saturday", "9 AM – 11 PM"],
  ["Sunday", "9 AM – 11 PM"],
];

export default function Page() {
  return (
    <main id="top">
      <Nav />

      {/* HERO ------------------------------------------------- */}
      <section className="hero">
        <div className="hero__atmos" aria-hidden="true" />
        <div className="hero__inner wrap hero__grid">
          <div className="hero__copy">
            <span className="eyebrow rise">Dragon Flame · Smoke Shop · East Orange</span>
            <h1 className="display hero__title rise" data-d="1">
              The <em>flame</em> the<br />block runs on.
            </h1>
            <p className="hero__sub rise" data-d="2">
              Glass, hardware and the goods, kept like a dispensary. The Harrison
              Street counter that treats you right, open till eleven every night.
            </p>
            <div className="hero__cuts rise" data-d="3">
              <a className="btn btn--solid" href={MAPS} target="_blank" rel="noopener noreferrer">
                Get Directions
              </a>
              <a className="btn btn--ghost" href="#counter">
                See the Counter
              </a>
            </div>
          </div>

          <div className="hero__media rise" data-d="2">
            <img src="/images/hero.jpg" alt="Premium chrome hookah and smoke at Dragon Flame Smoke Shop" />
            <span className="hero__badge">
              <DragonMark /> Open till 11 · 7 days
            </span>
          </div>
        </div>
      </section>

      {/* MARQUEE ---------------------------------------------- */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[0, 1].map((k) => (
            <div className="marquee__group" key={k}>
              {["Glass", "Hookah", "Vapes", "Wraps", "Grinders", "Lighters", "Hardware", "Late-Night Runs"].map((w) => (
                <span className="marquee__item" key={w}>
                  {w} <i>✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* STATUS STRIP ----------------------------------------- */}
      <section className="strip">
        <div className="wrap">
          <div className="strip__grid">
            <div className="strip__cell">
              <div className="strip__k">Open Daily</div>
              <div className="strip__v">9A <em>–</em> 11P</div>
            </div>
            <div className="strip__cell">
              <div className="strip__k">Days a Week</div>
              <div className="strip__v">Seven</div>
            </div>
            <div className="strip__cell">
              <div className="strip__k">On the Map</div>
              <div className="strip__v">Harrison St</div>
            </div>
            <div className="strip__cell">
              <div className="strip__k">Google Rating</div>
              <div className="strip__v">4.4 <em>★</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* COUNTER / DISPLAY CASE (signature) ------------------- */}
      <section id="counter" className="section-pad counter">
        <div className="wrap">
          <div className="counter__head">
            <span className="eyebrow rise">What's Behind the Glass</span>
            <h2 className="display counter__title rise" data-d="1">
              Stocked deep, kept clean, priced fair.
            </h2>
            <p className="lead rise" data-d="2" style={{ marginTop: "18px" }}>
              Walk the case like you would a dispensary counter. Real selection,
              no run-around, and people who actually know the shelves.
            </p>
          </div>
        </div>
        <div className="rise" data-d="2">
          <DisplayCase items={CASE} />
        </div>
      </section>

      {/* AFTER DARK ------------------------------------------- */}
      <section id="afterdark" className="afterdark">
        <div className="afterdark__bg" aria-hidden="true">
          <img src="/images/afterdark.jpg" alt="" />
        </div>
        <div className="afterdark__smoke" aria-hidden="true" />
        <div className="afterdark__inner wrap">
          <span className="eyebrow rise">After Dark</span>
          <h2 className="display afterdark__title rise" data-d="1">
            When the ave goes quiet, <em>the flame stays lit.</em>
          </h2>
          <p className="afterdark__p rise" data-d="2">
            Last-minute runs, the late shift, the long night. We're the light
            still on at the corner of Harrison, every night until eleven.
          </p>
        </div>
      </section>

      {/* PROOF ------------------------------------------------ */}
      <section className="section-pad">
        <div className="wrap">
          <span className="eyebrow rise">Word on the Block</span>
          <div className="proof__rating rise" data-d="1" style={{ marginTop: "20px" }}>
            <span className="proof__big">4.4</span>
            <span className="proof__stars" aria-label="4.4 out of 5">★★★★★</span>
            <span className="proof__count">across 9 Google reviews</span>
          </div>

          <div className="quotes">
            <figure className="quote rise" data-d="1">
              <div className="quote__mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="quote__text">
                Best customer service, cool deals, always recommend this spot.
              </blockquote>
              <figcaption className="quote__src">Google review</figcaption>
            </figure>
            <figure className="quote rise" data-d="2">
              <div className="quote__mark" aria-hidden="true">&ldquo;</div>
              <blockquote className="quote__text">
                Wish they stayed open a lil bit longer.
              </blockquote>
              <figcaption className="quote__src">Google review</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* VISIT ------------------------------------------------ */}
      <section id="visit" className="section-pad" style={{ background: "var(--ink-2)" }}>
        <div className="wrap">
          <span className="eyebrow rise">Find the Flame</span>
          <h2 className="display counter__title rise" data-d="1" style={{ marginBottom: "8px" }}>
            7 N Harrison St.
          </h2>

          <div className="visit__grid" style={{ marginTop: "28px" }}>
            <div className="rise" data-d="1">
              <div className="hours">
                {HOURS.map(([day, time]) => (
                  <div className="hours__row" key={day}>
                    <span>{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
              <div className="visit__addr">
                <h4>Address</h4>
                <p>7 N Harrison St, East Orange, NJ 07017</p>
              </div>
              <a
                className="btn btn--solid"
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "20px" }}
              >
                Open in Maps
              </a>
            </div>

            <div className="map rise" data-d="2">
              <iframe
                title="Dragon Flame Smoke Shop on the map"
                src="https://www.google.com/maps?q=7+N+Harrison+St,+East+Orange,+NJ+07017&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER ----------------------------------------------- */}
      <footer className="foot">
        <div className="wrap foot__grid">
          <div>
            <a className="foot__brand" href="#top">
              <DragonMark className="foot__mark" />
              <span className="nav__word">
                Dragon Flame<span className="nav__sub">Smoke Shop</span>
              </span>
            </a>
            <p className="foot__legal" style={{ marginTop: "16px" }}>
              7 N Harrison St, East Orange, NJ 07017. Open 9 AM to 11 PM, seven
              days a week.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span className="foot__age">
              <DragonMark /> 21+ · Valid ID Required
            </span>
            <p className="foot__legal">
              Must be 21 or older to purchase tobacco or vapor products. Please
              enjoy responsibly.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
