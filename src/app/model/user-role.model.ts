import { UUID } from './uuid.model';

// --- user_roles ---
export interface UserRole {
  id: UUID;
  user_id: UUID;
  role_id: UUID;
}