import { UUID } from './uuid.model';

export interface UserSignature {
  id: UUID;
  user_id: UUID;
  sig: Uint8Array; // BYTEA
}
