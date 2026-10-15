import type { Metadata } from "next";
import { AUTHOR_NAME, SITE_URL } from "@/lib/data/services";
import {
  AMAZON_AUTHOR_URL,
  APPLE_BOOKS_AUTHOR_URL,
  BOOKS,
} from "@/lib/data/books";
import { BookCard } from "@/components/BookCard";
import { ButtonLink, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Books",
  description: `Books by ${AUTHOR_NAME} on Amazon and Apple Books — the AI Can Hacked series and Siri, Explain guides.`,
  alternates: { canonical: SITE_URL + "/books" },
};

export default function BooksPage() {
  return (
    <div>
      <PageHero
        eyebrow="Library"
        title={`Books by ${AUTHOR_NAME}`}
        lede="The AI Can Hacked series for practitioners, and Siri, Explain guides for everyone else. Available on Amazon and Apple Books."
      />
      <Container className="py-12 sm:py-16">
        <div className="flex flex-wrap gap-3">
          <ButtonLink href={AMAZON_AUTHOR_URL} variant="gold" external>
            Amazon author page
          </ButtonLink>
          <ButtonLink href={APPLE_BOOKS_AUTHOR_URL} variant="ghost" external>
            Search Apple Books
          </ButtonLink>
        </div>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BOOKS.map((book) => (
            <li key={book.slug}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
