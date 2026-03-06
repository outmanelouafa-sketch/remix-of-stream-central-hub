
-- Seed site settings
INSERT INTO public.site_settings (whatsapp_number, telegram_id, email)
VALUES ('1234567890', 'bestiptvdeals', 'support@bestiptvdeals.com');

-- Seed pricing plans
INSERT INTO public.pricing_plans (name, price, period, channels, vod, devices, featured, badge, sort_order) VALUES
('1 Month', '$13.99', '/month', '17,000+', '100,000+', '1 Device', false, NULL, 1),
('3 Months', '$28.99', '/3 months', '17,000+', '100,000+', '1 Device', false, 'Save 30%', 2),
('6 Months', '$39.99', '/6 months', '17,000+', '100,000+', '2 Devices', true, 'Most Popular', 3),
('12 Months', '$59.99', '/year', '17,000+', '100,000+', '3 Devices', false, 'Best Value', 4);

-- Seed blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, emoji, read_time, published, image_url, tags) VALUES
('Best IPTV Service in 2025', 'best-iptv-service-2025', 'Discover why our IPTV service is rated #1 in 2025 with 17,000+ channels and 4K streaming.', 'Looking for the best IPTV service? Here is why thousands of customers choose us...', 'Entertainment', '📺', '5 min read', true, '', ARRAY['IPTV', 'Streaming', '2025']),
('How to Watch Live Sports with IPTV', 'watch-live-sports-iptv', 'Never miss a game again. Learn how to stream all major sports events in HD and 4K quality.', 'Sports fans rejoice! With our IPTV service you can watch every major sporting event...', 'Sports', '⚽', '4 min read', true, '', ARRAY['Sports', 'Live TV', 'Streaming']);
