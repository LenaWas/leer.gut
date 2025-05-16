import { Injectable } from '@angular/core';
import { createClient, SupabaseClient, AuthResponse, AuthError, Session } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root',
})
export class SupabaseAuthService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://dchysqlrxmdxxejeljzt.supabase.co', // Replace with your Supabase URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjaHlzcWxyeG1keHhlamVsanp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcwNTAxMDUsImV4cCI6MjA2MjYyNjEwNX0.jdU8Klh9rd7FphC32u-uNSuYlEd7BVxsPpmoYHwHPtg' // Replace with your Supabase anon key
    );
  }

  async signUp(email: string, password: string): Promise<AuthResponse> {
    return await this.supabase.auth.signUp({ email, password });
  }

  async signIn(email: string, password: string): Promise<AuthResponse> {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut(): Promise<{ error: AuthError | null }> {
    return await this.supabase.auth.signOut();
  }

  getSession(): Promise<{ data: { session: Session | null }, error: AuthError | null }> {
    return this.supabase.auth.getSession();
  }
}