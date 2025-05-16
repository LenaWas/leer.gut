import { Injectable, ApplicationRef, ComponentFactoryResolver, Injector, EventEmitter } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Property } from '../model/property.model';
import { PropertyInfoWindowComponent } from '../components/property-info-window.component';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  private loader: Loader;
  private map: google.maps.Map | null = null;
  private openInfoWindow: google.maps.InfoWindow | null = null; // <--- NEU
  onRentRequest: ((property: Property) => void) | null = null;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private appRef: ApplicationRef
  ) {
    this.loader = new Loader({
      apiKey: 'AIzaSyBHbA_2MYEsrwFLUiO3Dqwwz0UdhT0yriA', // Ersetze mit deinem API-Schlüssel
      version: 'weekly'
    });
  }

  async initializeMap(mapElement: HTMLElement, options: google.maps.MapOptions): Promise<void> {
    if (!mapElement) {
      console.error('Fehler: mapElement ist null oder undefined');
      return;
    }

    await this.loader.load();
    this.map = new google.maps.Map(mapElement, {
      ...options,
      mapTypeId: google.maps.MapTypeId.SATELLITE // Standardansicht auf Satellit
    });
  }

  addMarker(position: google.maps.LatLngLiteral, title?: string): google.maps.Marker | null {
    if (!this.map) {
      console.error('Karte wurde noch nicht initialisiert!');
      return null;
    }

    const marker = new google.maps.Marker({
      position,
      map: this.map,
      title
    });

    return marker;
  }

  addPropertyMarker(property: Property): google.maps.Marker | null {
    if (!this.map) {
      console.error('Karte wurde noch nicht initialisiert!');
      return null;
    }

    const marker = new google.maps.Marker({
      position: { lat: property.latitude, lng: property.longitude },
      map: this.map,
      title: property.title,
      label: {
        text: property.title,
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '14px',
        className: 'property-marker-label',
      },
      icon: {
        url: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f3e0.png',
        scaledSize: new google.maps.Size(36, 36),
        labelOrigin: new google.maps.Point(18, 44)
      }
    });

    // Dynamisch Komponente erzeugen
    const factory = this.resolver.resolveComponentFactory(PropertyInfoWindowComponent);
    const componentRef = factory.create(this.injector);
    componentRef.instance.property = property;

    // Callback für "Anmieten"-Button
    componentRef.instance.rent.subscribe((prop: Property) => {
      if (this.onRentRequest) {
        this.onRentRequest(prop);
      }
    });

    this.appRef.attachView(componentRef.hostView);
    const html = (componentRef.hostView as any).rootNodes[0] as HTMLElement;

    const infoWindow = new google.maps.InfoWindow({
      content: html
    });

    marker.addListener('click', () => {
      if (this.openInfoWindow) {
        this.openInfoWindow.close();
      }
      infoWindow.open(this.map, marker);
      this.openInfoWindow = infoWindow;
    });

    return marker;
  }
}
