import type { Book } from "@/lib/data/books";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gold/15 bg-panel p-6 transition hover:-translate-y-0.5 hover:border-gold/40 hover:bg-panel-2">
      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{book.series}</p>
      <h3 className="mt-3 font-serif text-xl leading-snug text-gold-soft">{book.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{book.blurb}</p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a
          href={book.amazonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold px-4 py-2 font-medium text-background hover:bg-gold-soft"
        >
          Amazon
        </a>
        <a
          href={book.appleBooksUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-gold/35 px-4 py-2 text-gold-soft hover:bg-gold/10"
        >
          Apple Books
        </a>
      </div>
    </article>
  );
}
