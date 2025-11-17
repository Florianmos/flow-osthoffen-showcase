-- Create storage bucket for testimonial images
INSERT INTO storage.buckets (id, name, public) 
VALUES ('testimonial-images', 'testimonial-images', true);

-- Create policies for testimonial images
CREATE POLICY "Anyone can view testimonial images" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'testimonial-images');

CREATE POLICY "Anyone can upload testimonial images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'testimonial-images');