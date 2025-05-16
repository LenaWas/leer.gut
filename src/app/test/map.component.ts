import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { GoogleMapsService } from '../services/google-maps.service';
import { Property } from '../model/property.model';

@Component({
  selector: 'app-map',
  template: `<div #mapContainer class="map-container"></div>`,
  styles: [`.map-container { width: 100%; height: 100%; }`]
})
export class MapComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  constructor(private googleMapsService: GoogleMapsService) {}

  async ngAfterViewInit(): Promise<void> {
    await this.googleMapsService.initializeMap(this.mapContainer.nativeElement, {
      center: { lat: 49.233, lng: 7.000 },
      zoom: 12
    });

    // Callback für Anmietung registrieren
    this.googleMapsService.onRentRequest = (property: Property) => {
      console.log('Anmietung angefragt für:', property);
    };

    // Beispiel-Blobs (hier als Dummy, in echt kommen sie z.B. aus einer API)
    const imageBlob1 = await fetch('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80').then(r => r.blob());
    const imageBlob2 = await fetch('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80').then(r => r.blob());

    const properties: Property[] = [
      {
        id: 1,
        title: 'Zentrum Saarbrücken',
        description: 'Schöne Wohnung im Zentrum von Saarbrücken.',
        landlord_user_id: '123e4567-e89b-12d3-a456-426614174000',
        longitude: 7.000,
        latitude: 49.233,
        date_available_from: '2024-06-01',
        date_available_to: '2025-06-01',
        sqm_size: 80,
        rental_cost: 900,
        rental_cost_currency: 'EUR',
        rental_cost_incidental: 150,
        rental_cost_incidental_currency: 'EUR',
        rental_deposit: 1800,
        rental_deposit_currency: 'EUR',
        lease_day_of_month: 1,
        keys_description: '2 Haustürschlüssel, 1 Briefkastenschlüssel',
        inventory_description: 'Küche, Waschmaschine, Schrank',
        image: imageBlob1
      },
      {
        id: 2,
        title: 'Universität Saarbrücken',
        description: 'Modernes Apartment nahe der Universität.',
        landlord_user_id: '123e4567-e89b-12d3-a456-426614174001',
        longitude: 6.981,
        latitude: 49.256,
        date_available_from: '2024-07-01',
        date_available_to: '2025-07-01',
        sqm_size: 45,
        rental_cost: 600,
        rental_cost_currency: 'EUR',
        rental_cost_incidental: 100,
        rental_cost_incidental_currency: 'EUR',
        rental_deposit: 1200,
        rental_deposit_currency: 'EUR',
        lease_day_of_month: 1,
        keys_description: '1 Haustürschlüssel, 1 Briefkastenschlüssel',
        inventory_description: 'Bett, Schreibtisch, Stuhl',
        image: imageBlob2
      }
    ];

    properties.forEach(property => {
      this.googleMapsService.addPropertyMarker(property);
    });
  }
}