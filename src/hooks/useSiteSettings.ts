import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface SiteSettings {
  whatsapp_number: string;
  telegram_id: string;
  email: string;
}

const defaults: SiteSettings = {
  whatsapp_number: "1234567890",
  telegram_id: "bestiptvdeals",
  email: "support@bestiptvdeals.com",
};

export const useSiteSettings = () => {
  return useQuery({
    queryKey: ["site-settings"],
    queryFn: async (): Promise<SiteSettings> => {
      const { data, error } = await supabase
        .from("site_settings")
        .select("whatsapp_number, telegram_id, email")
        .limit(1)
        .single();
      if (error || !data) return defaults;
      return data as SiteSettings;
    },
    staleTime: 5 * 60 * 1000,
  });
};
