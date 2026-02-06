-- US-001: services table with SEO fields
CREATE TABLE IF NOT EXISTS public.services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  seo_title text,
  meta_description text,
  og_image text,
  faq_json jsonb DEFAULT '[]'::jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_services_slug ON public.services(slug);

COMMENT ON TABLE public.services IS 'Service offerings with SEO and FAQ fields for goldmanndevelopmentllc.com';
