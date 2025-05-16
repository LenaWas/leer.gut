import { UUID } from './uuid.model';

// --- rental_documents ---
export interface RentalDocument {
  id: UUID;
  rental_document: Uint8Array; // BYTEA
  rental_request_id: UUID;
}
