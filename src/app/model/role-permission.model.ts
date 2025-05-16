import { UUID } from './uuid.model';

// --- role_permissions ---
export interface RolePermission {
  role_id: UUID;
  permission_id: UUID;
}