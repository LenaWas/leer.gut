import { UUID } from './uuid.model';

// --- user_company ---
export interface UserCompany {
  id: UUID;
  user_id: UUID;
  company?: string | null;
  email?: string | null;
  mobile?: string | null;
  commercial_register_court?: string | null;
  commercial_register_number?: string | null;
  sales_tax_id_number?: string | null;
}