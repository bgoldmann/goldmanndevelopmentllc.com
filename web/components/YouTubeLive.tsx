import { YOUTUBE, youtubeLiveEmbedSrc } from "@/lib/data/media";

export function YouTubeLive({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-gold/20 bg-panel shadow-[0_0_80px_rgba(212,175,55,0.08)]">
      <div className="flex items-center justify-between gap-3 border-b border-gold/15 px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-live" />
          </span>
          <figcaption className="text-sm font-medium text-gold-soft">
            {YOUTUBE.title}
          </figcaption>
        </div>
        <a
          href={YOUTUBE.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs uppercase tracking-wider text-muted hover:text-gold"
        >
          Open YouTube
        </a>
      </div>
      <div className={compact ? "aspect-video" : "aspect-video sm:aspect-[16/8.2]"}>
        <iframe
          src={youtubeLiveEmbedSrc()}
          title={YOUTUBE.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </figure>
  );
}
