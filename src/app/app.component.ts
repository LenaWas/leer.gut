import { Component } from '@angular/core';
// Import the MapComponent from the test folder
import { MapComponent } from './test/map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MapComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Immobilienverwaltung';
}
