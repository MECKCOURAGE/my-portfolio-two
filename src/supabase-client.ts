import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://fapfdvqlymoqavvdqkwy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhcGZkdnFseW1vcWF2dmRxa3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEwOTQ2NjUsImV4cCI6MjA3NjY3MDY2NX0.E_zQHEBH6WBZtcuhL0zsxtUpZyZL2fQFvQVMKSVoF4A"
);

export default supabase;
 