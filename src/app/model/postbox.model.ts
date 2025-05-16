import { UUID } from './uuid.model';

// --- postbox ---
export interface Postbox {
  id: UUID;
  user_id: UUID;
  created_at?: string; // ISO timestamp
  updated_at?: string; // ISO timestamp
}