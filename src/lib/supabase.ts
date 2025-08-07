import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_PROJECT_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PROJECT_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      user_favorites: {
        Row: {
          id: string
          user_id: string
          product_id: string
          product_name: string
          product_image: string
          current_price: number
          target_price: number | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          product_id: string
          product_name: string
          product_image: string
          current_price: number
          target_price?: number | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          product_id?: string
          product_name?: string
          product_image?: string
          current_price?: number
          target_price?: number | null
          created_at?: string
          updated_at?: string
        }
      }
      price_alerts: {
        Row: {
          id: string
          user_id: string
          favorite_id: string
          alert_price: number
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          favorite_id: string
          alert_price: number
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          favorite_id?: string
          alert_price?: number
          is_active?: boolean
          created_at?: string
        }
      }
    }
  }
}