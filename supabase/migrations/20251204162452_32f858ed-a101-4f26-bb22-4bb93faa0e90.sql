-- Add event_date column to testimonials table
ALTER TABLE public.testimonials ADD COLUMN event_date DATE;

-- Update existing testimonials with their event dates
UPDATE public.testimonials SET event_date = '2025-09-21' WHERE id = '2273166d-5376-40f9-9d2f-cc13e67ab4e0'; -- L & T - Mariage 21 septembre 2025
UPDATE public.testimonials SET event_date = '2025-09-06' WHERE id = '031b3ef5-0cfc-48ea-96bb-e761e5b8f20b'; -- S & P - Mariage 6 septembre 2025
UPDATE public.testimonials SET event_date = '2025-08-30' WHERE id = '9f3ae3cf-8c03-482b-85d4-85bca08b48b2'; -- L & J - Mariage 30 août 2025
UPDATE public.testimonials SET event_date = '2025-07-12' WHERE id = '0d823e8f-a4c5-4412-ac8b-cdef859c6802'; -- S & R - Mariage 12 juillet 2025
UPDATE public.testimonials SET event_date = '2025-06-07' WHERE id = 'bbd1499e-80fb-4a20-8479-f0a951ca09f6'; -- Autocross Steinbourg 7 juin 2025
UPDATE public.testimonials SET event_date = '2025-05-18' WHERE id = 'b16da571-b6f7-4a85-a779-7944ad3ba9cf'; -- Cédric - Anniversaire 18 mai 2025
UPDATE public.testimonials SET event_date = '2024-06-02' WHERE id = 'a9651240-92f0-47e7-81e6-c34059ab615e'; -- S - Anniversaire 2 juin 2024
UPDATE public.testimonials SET event_date = '2024-11-19' WHERE id = '72576b67-d3a3-4b8e-88ab-0833d6bc2b0b'; -- Marie Josee - Anniversaire 19 novembre 2024