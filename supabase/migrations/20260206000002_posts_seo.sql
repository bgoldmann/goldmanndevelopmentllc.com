-- US-002: posts table with SEO and internal link metadata
CREATE TABLE IF NOT EXISTS public.posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  seo_title text,
  meta_description text,
  tags text[] DEFAULT '{}',
  internal_links jsonb DEFAULT '[]'::jsonb,
  body text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_posts_slug ON public.posts(slug);
CREATE INDEX IF NOT EXISTS idx_posts_published ON public.posts(published_at) WHERE published_at IS NOT NULL;

COMMENT ON TABLE public.posts IS 'Blog/resource posts with SEO and internal link metadata';
