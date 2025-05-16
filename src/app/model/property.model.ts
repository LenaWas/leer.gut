export interface Property {
  id: number;
  title: string;
  description: string;
  landlord_user_id: string;
  longitude: number;
  latitude: number;
  date_available_from: string;
  date_available_to: string;
  sqm_size: number;
  rental_cost: number;
  rental_cost_currency: string;
  rental_cost_incidental: number;
  rental_cost_incidental_currency: string;
  rental_deposit: number;
  rental_deposit_currency: string;
  lease_day_of_month: number;
  keys_description: string;
  inventory_description: string;
  image: Blob;
}