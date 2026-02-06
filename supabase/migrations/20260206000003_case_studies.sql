-- US-003: case_studies table
CREATE TABLE IF NOT EXISTS public.case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  industry text,
  anonymized_results text,
  related_services text[] DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON public.case_studies(slug);

COMMENT ON TABLE public.case_studies IS 'Case studies with industry, anonymized results, and related services';
