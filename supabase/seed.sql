-- ==============================================================================
-- INITIAL DATABASE SEED SCRIPT FOR MOHAMMED AMJAD K
-- Projects matching resume details
-- ==============================================================================

INSERT INTO public.projects (id, title, description, image_url, live_url, github_url, tags, category)
VALUES
(
  'a1111111-1111-1111-1111-111111111111',
  'ClinicFlow',
  'A modular clinic-management backend with REST APIs, structured data models, MVC controllers, and routing layers. Full CRUD operations for patient, doctor, and appointment management.',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  NULL,
  'https://github.com/amjadkondeth/clinicflow',
  ARRAY['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
  'fullstack'
),
(
  'b2222222-2222-2222-2222-222222222222',
  'Flutter Location Tracking & Safety App',
  'A cross-platform mobile app with secure user authentication, real-time map-based location tracking, and geographic safety zone monitoring with continuous background location updates.',
  'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80',
  NULL,
  'https://github.com/amjadkondeth/location-safety-app',
  ARRAY['Flutter', 'Dart', 'Location APIs', 'Maps'],
  'fullstack'
),
(
  'c3333333-3333-3333-3333-333333333333',
  'CraveGuard',
  'A smoking cessation support app with habit tracking, craving support modules, money-saved visualizations, and location-based risk zone monitoring powered by Firebase real-time sync.',
  'https://images.unsplash.com/photo-1508847154043-be5407fcaa5a?auto=format&fit=crop&w=1200&q=80',
  NULL,
  'https://github.com/amjadkondeth/craveguard',
  ARRAY['Flutter', 'Dart', 'Firebase', 'Location Services'],
  'fullstack'
),
(
  'd4444444-4444-4444-4444-444444444444',
  'CCTV-Based Smart Attendance System',
  'An automated employee attendance system using CCTV camera monitoring to eliminate manual check-in. Built at Zoople Technologies with data processing, debugging, and system validation.',
  'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
  NULL,
  'https://github.com/amjadkondeth',
  ARRAY['Camera Monitoring', 'Data Processing', 'Automation', 'Python'],
  'fullstack'
)
ON CONFLICT (id) DO UPDATE SET
  title = EXCLUDED.title,
  description = EXCLUDED.description,
  image_url = EXCLUDED.image_url,
  live_url = EXCLUDED.live_url,
  github_url = EXCLUDED.github_url,
  tags = EXCLUDED.tags,
  category = EXCLUDED.category;
