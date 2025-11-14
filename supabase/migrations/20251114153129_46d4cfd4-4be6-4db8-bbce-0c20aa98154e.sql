-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  event TEXT NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  image TEXT,
  photographer TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  approved BOOLEAN NOT NULL DEFAULT false
);

-- Enable Row Level Security
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;

-- Policy: Everyone can read approved testimonials
CREATE POLICY "Anyone can view approved testimonials"
ON public.testimonials
FOR SELECT
USING (approved = true);

-- Policy: Anyone can insert testimonials (they will need approval)
CREATE POLICY "Anyone can create testimonials"
ON public.testimonials
FOR INSERT
WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX idx_testimonials_created_at ON public.testimonials(created_at DESC);
CREATE INDEX idx_testimonials_approved ON public.testimonials(approved);

-- Enable realtime for testimonials table
ALTER PUBLICATION supabase_realtime ADD TABLE public.testimonials;