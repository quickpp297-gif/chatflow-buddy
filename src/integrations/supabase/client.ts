// Supabase browser client
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://ydssjmxzbdpnecdpmove.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkc3NqbXh6YmRwbmVjZHBtb3ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgxMTgwNDYsImV4cCI6MjA5MzY5NDA0Nn0.ZHPbMBCVWAAdOEHPNVb-YFz0saTzaMHEMhNFNeQHL-w";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  },
});
