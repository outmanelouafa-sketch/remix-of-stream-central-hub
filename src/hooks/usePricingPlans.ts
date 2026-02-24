import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  channels: string;
  vod: string;
  devices: string;
  featured: boolean;
  badge: string | null;
}

export const usePricingPlans = () => {
  return useQuery({
    queryKey: ["pricing-plans"],
    queryFn: async (): Promise<PricingPlan[]> => {
      const { data, error } = await supabase
        .from("pricing_plans")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error || !data) return [];
      return data as PricingPlan[];
    },
    staleTime: 5 * 60 * 1000,
  });
};
