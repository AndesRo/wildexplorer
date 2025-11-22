import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  featuredStats = [
    { number: '500+', label: 'Fotografías' },
    { number: '50+', label: 'Especies' },
    { number: '25+', label: 'Países' },
    { number: '30+', label: 'Fotógrafos' }
  ];
}
