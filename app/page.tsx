import Link from 'next/link'

const collections = [
  {
    title: 'Ammi Edition™',
    subtitle: 'A missed call that feels like home.',
    href: '/preview?edition=ammi',
  },
  {
    title: 'Abba Edition™',
    subtitle: 'For the quiet strength that shaped you.',
    href: '/preview?edition=abba',
  },
  {
    title: 'My Love Edition™',
    subtitle: 'Some calls feel like home.',
    href: '/preview?edition=mylove',
  },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-[#F5E7C5]">
      <header className="sticky top-0 z-50 border-b border-[#1a1a1a] bg-black/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <div className="gold-text text-xl tracking-[0.35em]">ZABBRU</div>
          <nav className="hidden gap-8 text-sm text-[#D7C59A] md:flex">
            <a href="#collections">Collections</a>
            <a href="#story">Story</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Link
            href="/preview?edition=ammi"
            className="rounded-full border border-[#7a6130] px-4 py-2 text-xs tracking-[0.25em] text-[#D7C59A] transition hover:border-[#c8a96a] hover:text-[#F5E7C5]"
          >
            START MY DESIGN
          </Link>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col items-center px-4 pb-20 pt-16 text-center">
        <p className="gold-text text-xs tracking-[0.45em]">THE ATELIER</p>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight md:text-7xl">
          Luxury phone cases designed to feel like memories.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-[#CFC2A0]">
          Every ZABBRU edition is crafted to trigger an emotion the moment someone sees it.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/preview?edition=ammi"
            className="rounded-full bg-[#C8A96A] px-8 py-3 text-sm font-semibold tracking-[0.2em] text-black transition hover:bg-[#e7d3a2]"
          >
            PREVIEW YOUR CASE
          </Link>
          <a
            href="#collections"
            className="rounded-full border border-[#7a6130] px-8 py-3 text-sm tracking-[0.2em] text-[#D7C59A] transition hover:border-[#c8a96a] hover:text-[#F5E7C5]"
          >
            EXPLORE COLLECTIONS
          </a>
        </div>
      </section>

      <section id="collections" className="mx-auto max-w-7xl px-4 pb-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="gold-text text-xs tracking-[0.45em]">SIGNATURE COLLECTION</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">The emotional trilogy</h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-3xl border border-[#1f1a10] bg-[#050505] p-6 transition hover:border-[#5b4720] hover:bg-[#090909]"
            >
              <div className="aspect-[9/16] rounded-2xl border border-[#151515] bg-gradient-to-b from-[#16120b] via-black to-black gold-glow" />
              <h3 className="mt-6 font-display text-2xl group-hover:text-[#E7D3A2]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[#C7B891]">{item.subtitle}</p>
              <div className="mt-6 text-xs tracking-[0.3em] text-[#B99652]">
                CUSTOMIZE →
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="story" className="border-y border-[#121212] bg-[#040404]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="gold-text text-xs tracking-[0.45em]">OUR STORY</p>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              We don’t sell phone cases. We preserve feelings.
            </h2>
          </div>
          <div className="text-[#D2C4A1]">
            ZABBRU was created in Hyderabad with a simple belief: the most valuable thing we carry is not our phone, but the memories attached to it. Every edition is designed to make someone pause, smile, and think of a person they love.
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-20">
        <p className="gold-text text-center text-xs tracking-[0.45em]">FAQ</p>
        <h2 className="mt-4 text-center font-display text-3xl md:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 space-y-4">
          {[
            ['Do you support all phone models?', 'Yes. We support iPhone, Samsung, Vivo, Oppo, Redmi, Realme, and many more models.'],
            ['Is the preview live?', 'Yes. The name updates instantly on the preview before you order.'],
            ['How long does delivery take?', 'Hyderabad same-day delivery is available for selected areas. Pan-India shipping usually takes 3–7 business days.'],
          ].map(([q, a]) => (
            <details key={q} className="rounded-2xl border border-[#1b1b1b] bg-[#050505] p-5">
              <summary className="cursor-pointer text-[#F5E7C5]">{q}</summary>
              <p className="mt-3 text-sm text-[#C7B891]">{a}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#111] py-8 text-center text-sm text-[#8F7A4B]">
        ZABBRU • Customize Your Mood
      </footer>
    </main>
  )
}
