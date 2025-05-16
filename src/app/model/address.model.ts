import { UUID } from './uuid.model';

// --- addresses ---
export interface Address {
  id: UUID;
  street?: string | null;
  zip_code?: string | null;
  city?: string | null;
  country?: string | null;
}