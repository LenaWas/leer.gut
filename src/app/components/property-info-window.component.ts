import { Component, Input, Output, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Property } from '../model/property.model';

@Component({
  selector: 'app-property-info-window',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="info-window">
      <img *ngIf="imageUrl" [src]="imageUrl" alt="Bild zur Immobilie" class="property-image" />
      <h2>{{ property.title }}</h2>
      <p>{{ property.description }}</p>
      <table>
        <tr><td>Fläche:</td><td>{{ property.sqm_size }} m²</td></tr>
        <tr><td>Miete:</td><td>{{ property.rental_cost }} {{ property.rental_cost_currency }}</td></tr>
        <tr><td>Nebenkosten:</td><td>{{ property.rental_cost_incidental }} {{ property.rental_cost_incidental_currency }}</td></tr>
        <tr><td>Kaution:</td><td>{{ property.rental_deposit }} {{ property.rental_deposit_currency }}</td></tr>
        <tr><td>Verfügbar:</td><td>{{ property.date_available_from }} bis {{ property.date_available_to }}</td></tr>
        <tr><td>Schlüssel:</td><td>{{ property.keys_description }}</td></tr>
        <tr><td>Inventar:</td><td>{{ property.inventory_description }}</td></tr>
      </table>
      <button class="rent-btn" (click)="onRentClick()">Anmieten</button>
    </div>
  `,
  styles: [`
    .info-window {
      font-family: 'Segoe UI', Arial, sans-serif;
      max-width: 320px;
      padding: 8px;
    }
    .property-image {
      width: 100%;
      max-height: 140px;
      object-fit: cover;
      border-radius: 6px;
      margin-bottom: 8px;
      background: #f5f5f5;
      display: block;
    }
    h2 {
      margin: 0 0 8px 0;
      font-size: 1.2rem;
      color: #1976d2;
    }
    p {
      margin: 0 0 12px 0;
      color: #444;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.98rem;
    }
    td:first-child {
      font-weight: 600;
      padding: 4px 6px 4px 0;
      color: #222;
    }
    td:last-child {
      padding: 4px 0;
      color: #333;
    }
    .rent-btn {
      margin-top: 14px;
      width: 100%;
      background: #1976d2;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 10px 0;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.2s;
    }
    .rent-btn:hover {
      background: #125ea2;
    }
  `]
})
export class PropertyInfoWindowComponent implements OnInit, OnDestroy {
  @Input() property!: Property;
  @Output() rent = new EventEmitter<Property>();
  imageUrl: string | null = null;

  ngOnInit() {
    if (this.property.image) {
      this.imageUrl = URL.createObjectURL(this.property.image);
    }
  }

  ngOnDestroy() {
    if (this.imageUrl) {
      URL.revokeObjectURL(this.imageUrl);
    }
  }

  onRentClick() {
    this.rent.emit(this.property);
  }
}