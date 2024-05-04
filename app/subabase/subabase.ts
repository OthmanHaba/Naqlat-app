import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const subaBaseUrl =  "https://mpkdaeqyafzccnzdohfc.supabase.co";
const subaApiKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1wa2RhZXF5YWZ6Y2NuemRvaGZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2NjQ5OTEsImV4cCI6MjAzMDI0MDk5MX0.i_UwnY7IwWUExdhNMhdPRnefe_WUZcLO6c79g10BNuA";


export const supabase = createClient(subaBaseUrl, subaApiKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
