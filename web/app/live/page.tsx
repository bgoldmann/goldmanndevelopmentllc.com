import type { Metadata } from "next";
import { SITE_URL } from "@/lib/data/services";
import { INSTAGRAM, YOUTUBE, youtubeUploadsEmbedSrc } from "@/lib/data/media";
import { YouTubeLive } from "@/components/YouTubeLive";
import { InstagramPanel } from "@/components/InstagramPanel";
import { ButtonLink, Container, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Live Broadcast",
  description: `Watch ${YOUTUBE.title} live on YouTube and follow ${INSTAGRAM.handle} on Instagram.`,
  alternates: { canonical: SITE_URL + "/live" },
};

export default function LivePage() {
  return (
    <div>
      <PageHero
        eyebrow="Broadcast"
        title={YOUTUBE.title}
        lede={`${YOUTUBE.subtitle}. Watch the live window here, or open the channel when you want the full YouTube experience.`}
      />
      <Container className="py-14 sm:py-16">
        <YouTubeLive />
        <div className="mt-6 flex flex-wrap gap-3">
          <ButtonLink href={YOUTUBE.liveUrl} variant="gold" external>
            Watch on YouTube
          </ButtonLink>
          <ButtonLink href={YOUTUBE.channelUrl} variant="ghost" external>
            {YOUTUBE.handle}
          </ButtonLink>
          <ButtonLink href={INSTAGRAM.url} variant="ghost" external>
            {INSTAGRAM.handle}
          </ButtonLink>
        </div>

        <section className="mt-16" aria-labelledby="recent-heading">
          <h2 id="recent-heading" className="font-serif text-3xl text-gold-soft">
            Recent from the channel
          </h2>
          <p className="mt-2 text-muted">
            Latest uploads from {YOUTUBE.handle} when the live desk is dark.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-gold/20 bg-panel">
            <div className="aspect-video">
              <iframe
                src={youtubeUploadsEmbedSrc()}
                title={`${YOUTUBE.title} recent videos`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </section>

        <section className="mt-16" aria-labelledby="instagram-heading">
          <h2 id="instagram-heading" className="sr-only">
            Instagram
          </h2>
          <InstagramPanel />
        </section>
      </Container>
    </div>
  );
}
