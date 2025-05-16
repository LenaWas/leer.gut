import { UUID } from './uuid.model';

// --- user_details ---
export interface UserDetails {
  id: UUID;
  user_id: UUID;
  first_name?: string | null;
  last_name?: string | null;
  mobile?: string | null;
  id_number?: string | null;
}