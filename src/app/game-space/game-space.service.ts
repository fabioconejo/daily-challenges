import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GameSpaceService {
  private supabase;

  constructor() {
    this.supabase = createClient(
      environment.supabase.supabaseUrl,
      environment.supabase.supabaseKey
    );
  }

  async isAWord(word: string): Promise<boolean> {
    let result = await this.supabase
      .from('dictionary')
      .select('*')
      .eq('word', word);

    return result.data.length !== 0;
  }
}
