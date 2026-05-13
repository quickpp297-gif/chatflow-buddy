// Supabase browser client (ported from original repo)
import { createClient } from "@supabase/supabase-js";
import type { Database } from "./types";

const SUPABASE_URL = "https://ztugboocjggtiyucrnkd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0dWdib29jamdndGl5dWNybmtkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4ODAwNTEsImV4cCI6MjA5MTQ1NjA1MX0.k9JTtmYPHNl23zrhslQ5p5Kk43kty3HGOcVQdtTrthM";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    persistSession: true,
    autoRefreshToken: true,
  },
});
