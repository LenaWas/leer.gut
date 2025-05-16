import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Property } from '../../model/property.model';

@Component({
  selector: 'app-property-window',
  imports: [],
  templateUrl: './property-window.component.html',
  styleUrl: './property-window.component.css',
})
export class PropertyWindowComponent {
  @Input() property!: Property;
  @Output() rent = new EventEmitter<Property>();
  imageUrl: string | null = null;

  ngOnInit() {
    if (this.property.image) {
      // Fix: Convert Uint8Array or ArrayBuffer to Blob before using URL.createObjectURL
      const blob = new Blob([this.property.image as ArrayBuffer], { type: 'image/png' });
      this.imageUrl = URL.createObjectURL(blob);
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
