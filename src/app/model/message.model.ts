import { UUID } from './uuid.model';

// --- message ---
export interface Message {
  id: UUID;
  postbox_id: UUID;
  sender_id: UUID;
  content: string;
  sent_at?: string; // ISO timestamp
  is_read?: boolean;
}