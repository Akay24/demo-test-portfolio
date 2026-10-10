import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  created_at?: string;
}

/**
 * Submits contact form message to Supabase.
 * Strictly relies on environment variables — no hardcoded fallback keys.
 */
export async function submitContactMessage(
  payload: ContactMessage
): Promise<{ success: boolean; error?: string }> {
  if (!supabase) {
    return { success: false, error: "Supabase environment variables not configured" };
  }

  try {
    const { error } = await supabase.from("messages").insert([
      {
        name: payload.name,
        email: payload.email,
        message: payload.message,
      },
    ]);

    if (error) {
      console.warn("Supabase insert note:", error.message);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Network error";
    console.warn("Supabase connection note:", message);
    return { success: false, error: message };
  }
}
