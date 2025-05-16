import { UUID } from './uuid.model';

// --- bank_details ---
export interface BankDetails {
  id: UUID;
  name?: string | null;
  account_holder?: string | null;
  iban?: string | null;
  bic?: string | null;
}
