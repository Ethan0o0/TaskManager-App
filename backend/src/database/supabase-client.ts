import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config({path: path.resolve(__dirname, '../../.env')});

const supabase_url = process.env.SUPABASE_URL as string;
const supabase_key = process.env.SUPABASE_KEY as string;

const supabase = createClient(supabase_url, supabase_key)

export default supabase;