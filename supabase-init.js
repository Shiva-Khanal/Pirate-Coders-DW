import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://jmwbxqpkbpxxsmgqvibq.supabase.co";
const SUPABASE_ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imptd2J4cXBrYnB4eHNtZ3F2aWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5OTA1NDcsImV4cCI6MjA4MDU2NjU0N30.tgKP3aqZ8nWg1mHnMpuVabvD3b95y6M7lqxyhCOOHjM";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON);