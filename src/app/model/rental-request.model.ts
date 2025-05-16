import { UUID } from './uuid.model';

// --- rental_requests ---
export interface RentalRequest {
  id: UUID;
  title?: string | null;
  description?: string | null;
  citizen_score?: number | null;
  sqm_rental_size?: number | null;
  date_from?: string | null;
  date_to?: string | null;
  user_id: UUID;
  property_id: UUID;
  rental_status_id: UUID;
}
