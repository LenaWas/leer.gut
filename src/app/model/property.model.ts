import { UUID } from './uuid.model';

// --- properties ---
export interface Property {
  id: UUID;
  title?: string | null;
  description?: string | null;
  landlord_user_id: UUID;
  longitude?: number | null;
  latitude?: number | null;
  date_available_from?: string | null; // ISO date string
  date_available_to?: string | null;   // ISO date string
  sqm_size?: number | null;
  rental_cost?: number | null;
  rental_cost_currency?: string | null;
  rental_cost_incidental?: number | null;
  rental_cost_incidental_currency?: string | null;
  rental_deposit?: number | null;
  rental_deposit_currency?: string | null;
  lease_day_of_month?: number | null;
  keys_description?: string | null;
  inventory_description?: string | null;
  image?: Uint8Array | null; // BYTEA
}

