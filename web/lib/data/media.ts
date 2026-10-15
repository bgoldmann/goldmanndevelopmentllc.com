export const YOUTUBE = {
  handle: "@IranNRTV_LIVE",
  channelId: "UCCcz6iBmmeE-OdVEgVo_87Q",
  channelUrl: "https://www.youtube.com/@IranNRTV_LIVE",
  liveUrl: "https://www.youtube.com/@IranNRTV_LIVE/live",
  title: "Iran NRTV Live",
  subtitle: "National Revolution TV — live broadcasting",
} as const;

export const INSTAGRAM = {
  handle: "@18th19thday",
  url: "https://www.instagram.com/18th19thday/",
  title: "18th19thday",
} as const;

export function youtubeLiveEmbedSrc() {
  return `https://www.youtube-nocookie.com/embed/live_stream?channel=${YOUTUBE.channelId}&rel=0`;
}

export function youtubeUploadsEmbedSrc() {
  const uploadsId = "UU" + YOUTUBE.channelId.slice(2);
  return `https://www.youtube-nocookie.com/embed?listType=playlist&list=${uploadsId}&rel=0`;
}
