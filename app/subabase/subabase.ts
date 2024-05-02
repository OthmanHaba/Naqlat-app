import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

const subaBaseUrl =  process.env.SUBA_BASE_URL;
const subaApiKey = process.env.SUBA_API_KEY;


export const supabase = createClient(subaBaseUrl, subaApiKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
