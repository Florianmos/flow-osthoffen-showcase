-- Add RLS policies for UPDATE and DELETE on testimonials table
-- Only allow updates and deletes if user is authenticated (can be expanded to admin-only later)

-- For now, disable UPDATE and DELETE completely for better security
-- This prevents anyone from modifying or deleting testimonials
CREATE POLICY "Prevent testimonial updates"
ON public.testimonials
FOR UPDATE
USING (false);

CREATE POLICY "Prevent testimonial deletions"
ON public.testimonials
FOR DELETE
USING (false);