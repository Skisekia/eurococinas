// components/Reviews.tsx
"use client";

type FbReview = { type: "facebook"; href: string; height?: number; };
type Review = FbReview;

function fbPluginSrc(href: string, width = 500) {
  const enc = encodeURIComponent(href);
  return `https://www.facebook.com/plugins/post.php?href=${enc}&show_text=true&width=${width}`;
}

export default function Reviews() {
  const reviews: Review[] = [
    { type: "facebook", href: "https://www.facebook.com/Sarahi.arreol/posts/pfbid02hQrDbNfCzixPcfmnmhSaZ7reFy7nivycnkxu8ECWdhbFg24r6aJgLUeeHi7psHGHl", height: 188 },
    { type: "facebook", href: "https://www.facebook.com/mauricio.briones.56/posts/pfbid0D7e9i93Nj96ZAuvh1TVrSJgjXvHRDvqL4CYakvzsu9qpMfTCanEzLJypTEULLYAAl", height: 158 },
    { type: "facebook", href: "https://www.facebook.com/siclary.arreola.7/posts/2951532685234871", height: 169 },
  ];

  return (
   <section className="mx-auto max-w-[1400px] px-6 pt-8 md:pt-10 pb-0">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold mb-0">Reseñas en Facebook</h2>
        <a
          href="https://www.facebook.com/EurococinasLaguna/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-slate-700 hover:underline"
        >
          Ver más en Facebook
        </a>
      </div>

      <div className="grid grid-cols-1 gap-4 md:gap-5 md:grid-cols-3">
        {reviews.map((r, idx) => (
          <article key={`fb-${idx}`} className="rounded-2xl border bg-white p-3 shadow-sm">
            <div className="mx-auto w-full max-w-[500px]">
              <iframe
                src={fbPluginSrc(r.href)}
                width="100%"
                height={r.height ?? 220}
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder={0}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
