import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gawnumfigdpidwpzekmn.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhd251bWZpZ2RwaWR3cHpla21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxOTk5OTUsImV4cCI6MjAyNDc3NTk5NX0.wDV2P2C7o25goz7BWHHyRC1On0A7Gh6F8FPLoKU4mfQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
/*
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
    .eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdhd251bWZpZ2RwaWR3cHpla21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxOTk5OTUsImV4cCI6MjAyNDc3NTk5NX0
    .wDV2P2C7o25goz7BWHHyRC1On0A7Gh6F8FPLoKU4mfQ;
*/
