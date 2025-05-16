import { UUID } from './uuid.model';

// --- permissions ---
export interface Permission {
  id: UUID;
  permission: string;
}