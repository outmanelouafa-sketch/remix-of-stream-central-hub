
-- Pricing plans table
CREATE TABLE public.pricing_plans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price TEXT NOT NULL,
  period TEXT NOT NULL,
  channels TEXT NOT NULL DEFAULT '17,000+',
  vod TEXT NOT NULL DEFAULT '100,000+',
  devices TEXT NOT NULL DEFAULT '4 Devices',
  featured BOOLEAN NOT NULL DEFAULT false,
  badge TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.pricing_plans ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read pricing plans"
  ON public.pricing_plans FOR SELECT USING (true);

-- Site settings table (single row for contact info)
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  whatsapp_number TEXT NOT NULL DEFAULT '1234567890',
  telegram_id TEXT NOT NULL DEFAULT 'primeiptv',
  email TEXT NOT NULL DEFAULT 'support@primeiptv.com',
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read site settings"
  ON public.site_settings FOR SELECT USING (true);

-- Insert default pricing data
INSERT INTO public.pricing_plans (name, price, period, channels, vod, devices, featured, badge, sort_order) VALUES
  ('1 Month', '€9.00', '/ month', '17,000+', '100,000+', '4 Devices', false, NULL, 1),
  ('6 Months', '€29.00', '/ 6 months', '17,000+', '100,000+', '4 Devices', false, 'Save 46%', 2),
  ('12 Months', '€45.00', '/ year', '17,000+', '100,000+', '4 Devices', true, 'Best Value', 3),
  ('24 Months', '€65.00', '/ 2 years', '17,000+', '100,000+', '4 Devices', false, 'Save 70%', 4);

-- Insert default contact settings
INSERT INTO public.site_settings (whatsapp_number, telegram_id, email) VALUES
  ('1234567890', 'primeiptv', 'support@primeiptv.com');
