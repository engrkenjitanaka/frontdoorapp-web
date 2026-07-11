"use client";

import { useEffect, useState } from "react";

type Item = {
  name: string;
  desc: string;
  price: string;
  img: string;
  long: string;
  ingredients: string[];
  tags: string[];
};

const menu: { category: string; items: Item[] }[] = [
  {
    category: "Breads",
    items: [
      {
        name: "Sourdough Boule",
        desc: "48-hour naturally leavened, crackly crust",
        price: "$8.00",
        img: "sourdough",
        long: "Our flagship loaf. A wild-yeast starter we’ve kept alive since 2014, fermented slow for 48 hours, then baked in a cast-iron Dutch oven for a blistered, crackly crust and an open, tangy crumb.",
        ingredients: ["Organic stone-milled flour", "Filtered water", "Sea salt", "Wild sourdough starter"],
        tags: ["Vegan", "Baked daily"],
      },
      {
        name: "Seeded Multigrain",
        desc: "Flax, sunflower, oats, honey",
        price: "$7.00",
        img: "multigrain",
        long: "A hearty sandwich loaf packed with toasted seeds and a touch of honey. Soft, even crumb and a nutty crust. It makes the best morning toast you’ll have all week.",
        ingredients: ["Whole-wheat & rye flour", "Flax, sunflower & sesame seeds", "Rolled oats", "Honey", "Sea salt"],
        tags: ["Contains seeds"],
      },
      {
        name: "Country Baguette",
        desc: "Baked fresh twice daily",
        price: "$4.00",
        img: "baguette",
        long: "Thin, shattering crust and an airy, irregular interior. Best within a few hours of baking, which is exactly why we pull a fresh batch at 7am and again at 1pm.",
        ingredients: ["French-style flour", "Filtered water", "Sea salt", "Levain"],
        tags: ["Vegan", "Baked 2× daily"],
      },
    ],
  },
  {
    category: "Pastries",
    items: [
      {
        name: "Butter Croissant",
        desc: "Laminated over three days",
        price: "$4.50",
        img: "croissant",
        long: "Laminated over three days with European cultured butter for twenty-seven feather-light layers. A crisp, shattering shell gives way to a soft, custardy center.",
        ingredients: ["Flour", "Cultured butter", "Milk", "Yeast", "Sugar", "Salt"],
        tags: ["Contains dairy & gluten"],
      },
      {
        name: "Almond Croissant",
        desc: "Frangipane, toasted almonds",
        price: "$5.50",
        img: "almond",
        long: "Yesterday’s croissant, reborn. Soaked in vanilla syrup, filled with house frangipane, then topped with sliced almonds and a snowfall of powdered sugar.",
        ingredients: ["Butter croissant", "Almond frangipane", "Vanilla syrup", "Sliced almonds"],
        tags: ["Contains nuts & dairy"],
      },
      {
        name: "Morning Bun",
        desc: "Cinnamon, orange zest, sugar crust",
        price: "$5.00",
        img: "morningbun",
        long: "Croissant dough rolled with cinnamon and fresh orange zest, baked in a muffin tin so the edges caramelize, then tossed in sugar while still warm. Our weekend favorite.",
        ingredients: ["Croissant dough", "Cinnamon", "Orange zest", "Raw sugar"],
        tags: ["Contains dairy & gluten", "Weekends only"],
      },
    ],
  },
  {
    category: "Coffee & Drinks",
    items: [
      {
        name: "Drip Coffee",
        desc: "Local single-origin, rotating",
        price: "$3.50",
        img: "coffee",
        long: "A rotating single-origin from a local roaster, brewed in small batches throughout the day. Ask the counter what’s on. It changes every week.",
        ingredients: ["Single-origin coffee", "Filtered water"],
        tags: ["Vegan", "Free refills"],
      },
      {
        name: "Cappuccino",
        desc: "House espresso, silky microfoam",
        price: "$4.75",
        img: "cappuccino",
        long: "A double shot of our house espresso under a deep layer of silky steamed-milk microfoam. Equal parts espresso, milk, and foam, the way it should be.",
        ingredients: ["House espresso", "Steamed milk"],
        tags: ["Oat milk available"],
      },
      {
        name: "Chai Latte",
        desc: "House-spiced, lightly sweet",
        price: "$5.00",
        img: "chai",
        long: "House-steeped black tea with cardamom, ginger, clove and cinnamon, pulled with steamed milk and lightly sweetened. Tell us if you’d like it spicier, and we’ll oblige.",
        ingredients: ["House chai concentrate", "Black tea & spices", "Steamed milk"],
        tags: ["Oat milk available"],
      },
    ],
  },
];

export function Menu() {
  const [selected, setSelected] = useState<Item | null>(null);
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <>
      <div className="mt-8 space-y-10">
        {menu.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand">{group.category}</h3>
            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setSelected(item);
                    setOrdered(false);
                  }}
                  className="group overflow-hidden rounded-2xl border border-line bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-brand/20"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/demo/${item.img}.jpg`} alt={item.name} loading="lazy" className="h-44 w-full object-cover" />
                  <div className="p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <h4 className="font-bold text-ink">{item.name}</h4>
                      <span className="shrink-0 font-display font-bold text-ink">{item.price}</span>
                    </div>
                    <p className="mt-1 text-sm text-ink-soft">{item.desc}</p>
                    <span className="mt-2 inline-block text-xs font-semibold text-brand opacity-0 transition group-hover:opacity-100">
                      View details →
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.name}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink-deep/60 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <button
              type="button"
              autoFocus
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink-deep shadow-md backdrop-blur transition hover:bg-white"
            >
              ✕
            </button>
            {ordered ? (
              <div className="p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 animate-pop">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-8 w-8 text-emerald-600">
                    <path
                      d="M5 13l4 4 10-11"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-check"
                      style={{ strokeDasharray: 30 }}
                    />
                  </svg>
                </div>
                <h3 className="mt-4 font-display text-xl font-extrabold text-ink">Order placed!</h3>
                <p className="mt-2 text-sm text-ink-soft">
                  Bella’s would start on your {selected.name} right away. This is a demo, so nothing
                  was actually ordered.
                </p>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition active:scale-[0.98] hover:bg-brand-strong"
                >
                  Done
                </button>
              </div>
            ) : (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/demo/${selected.img}.jpg`} alt={selected.name} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-2xl font-extrabold text-ink">{selected.name}</h3>
                    <span className="shrink-0 font-display text-xl font-bold text-ink">{selected.price}</span>
                  </div>
                  {selected.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.tags.map((t) => (
                        <span key={t} className="rounded-full bg-mist px-2.5 py-1 text-xs font-semibold text-brand-strong">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <p className="mt-4 leading-relaxed text-ink-soft">{selected.long}</p>
                  <h4 className="mt-5 text-sm font-bold uppercase tracking-widest text-brand">What’s in it</h4>
                  <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                    {selected.ingredients.map((ing) => (
                      <li key={ing} className="flex gap-2">
                        <span className="text-brand">•</span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setOrdered(true)}
                    className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-xl bg-brand px-6 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition active:scale-[0.98] hover:bg-brand-strong"
                  >
                    Order {selected.name}
                  </button>
                  <p className="mt-2 text-center text-xs text-ink-soft">Demo only. Ordering isn’t wired up.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
