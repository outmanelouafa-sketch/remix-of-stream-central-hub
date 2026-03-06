
UPDATE public.pricing_plans SET name = '1 Month', price = '€9', period = '/ month', channels = '43,000+', vod = '200,000+', devices = '1 Device', featured = false, badge = NULL, sort_order = 1 WHERE sort_order = 1;
UPDATE public.pricing_plans SET name = '6 Months', price = '€35', period = '/ 6 months', channels = '43,000+', vod = '200,000+', devices = '1 Device', featured = false, badge = 'Save 46%', sort_order = 2 WHERE sort_order = 2;
UPDATE public.pricing_plans SET name = '12 Months', price = '€49', period = '/ year', channels = '43,000+', vod = '200,000+', devices = '2 Devices', featured = false, badge = 'Best Value', sort_order = 3 WHERE sort_order = 3;
UPDATE public.pricing_plans SET name = '2 Years + 3 Months Free', price = '€79', period = '/ 2 years', channels = '43,000+', vod = '200,000+', devices = '3 Devices', featured = true, badge = 'Save 70%', sort_order = 4 WHERE sort_order = 4;
