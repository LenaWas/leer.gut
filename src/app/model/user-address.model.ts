import { UUID } from './uuid.model';

// --- user_addresses ---
export interface UserAddress {
  user_id: UUID;
  address_id: UUID;
}
