export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      active_sessions: {
        Row: {
          country: string | null
          id: string
          ip_address: string
          last_seen: string
          page: string
          referrer: string | null
          session_id: string
          started_at: string
          timezone: string | null
          user_agent: string
          visitor_id: string | null
        }
        Insert: {
          country?: string | null
          id?: string
          ip_address?: string
          last_seen?: string
          page?: string
          referrer?: string | null
          session_id: string
          started_at?: string
          timezone?: string | null
          user_agent?: string
          visitor_id?: string | null
        }
        Update: {
          country?: string | null
          id?: string
          ip_address?: string
          last_seen?: string
          page?: string
          referrer?: string | null
          session_id?: string
          started_at?: string
          timezone?: string | null
          user_agent?: string
          visitor_id?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          category: string
          content: string
          created_at: string
          excerpt: string
          id: string
          image_url: string
          published: boolean
          read_time: string
          slug: string
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          id?: string
          image_url?: string
          published?: boolean
          read_time?: string
          slug: string
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          excerpt?: string
          id?: string
          image_url?: string
          published?: boolean
          read_time?: string
          slug?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      pricing_plans: {
        Row: {
          badge: string | null
          channels: string
          created_at: string
          devices: string
          featured: boolean
          id: string
          name: string
          period: string
          price: string
          sort_order: number
          vod: string
        }
        Insert: {
          badge?: string | null
          channels?: string
          created_at?: string
          devices?: string
          featured?: boolean
          id?: string
          name: string
          period: string
          price: string
          sort_order?: number
          vod?: string
        }
        Update: {
          badge?: string | null
          channels?: string
          created_at?: string
          devices?: string
          featured?: boolean
          id?: string
          name?: string
          period?: string
          price?: string
          sort_order?: number
          vod?: string
        }
        Relationships: []
      }
      site_events: {
        Row: {
          country: string | null
          created_at: string
          event: string
          id: string
          ip_address: string
          local_time: string | null
          meta: Json | null
          page: string
          referrer: string | null
          session_id: string | null
          timezone: string | null
          user_agent: string
          visitor_id: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          event: string
          id?: string
          ip_address?: string
          local_time?: string | null
          meta?: Json | null
          page?: string
          referrer?: string | null
          session_id?: string | null
          timezone?: string | null
          user_agent?: string
          visitor_id?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          event?: string
          id?: string
          ip_address?: string
          local_time?: string | null
          meta?: Json | null
          page?: string
          referrer?: string | null
          session_id?: string | null
          timezone?: string | null
          user_agent?: string
          visitor_id?: string | null
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          email: string
          id: string
          telegram_id: string
          updated_at: string
          whatsapp_number: string
        }
        Insert: {
          email?: string
          id?: string
          telegram_id?: string
          updated_at?: string
          whatsapp_number?: string
        }
        Update: {
          email?: string
          id?: string
          telegram_id?: string
          updated_at?: string
          whatsapp_number?: string
        }
        Relationships: []
      }
      site_visits: {
        Row: {
          country: string | null
          created_at: string
          id: string
          ip_address: string
          local_time: string | null
          page: string
          referrer: string | null
          screen: Json | null
          session_id: string | null
          timezone: string | null
          user_agent: string
          visitor_id: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          id?: string
          ip_address?: string
          local_time?: string | null
          page?: string
          referrer?: string | null
          screen?: Json | null
          session_id?: string | null
          timezone?: string | null
          user_agent?: string
          visitor_id?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          id?: string
          ip_address?: string
          local_time?: string | null
          page?: string
          referrer?: string | null
          screen?: Json | null
          session_id?: string | null
          timezone?: string | null
          user_agent?: string
          visitor_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      count_unique_visitors: { Args: { since?: string }; Returns: number }
      get_visits_chart_data: {
        Args: { days_back?: number }
        Returns: {
          total_visits: number
          unique_visitors: number
          visit_date: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
