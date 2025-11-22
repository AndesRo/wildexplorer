import { Component } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('rotateLogo', [
      state('normal', style({
        transform: 'rotate(0deg)'
      })),
      state('rotated', style({
        transform: 'rotate(360deg)'
      })),
      transition('normal => rotated', [
        animate('2s ease-in-out')
      ])
    ])
  ]
})
export class HeaderComponent {
  menuItems = [
    { label: 'Inicio', path: '/' },
    { label: 'Galería', path: '/galeria' }
  ];

  logoState = 'normal';

  onLogoHover() {
    this.logoState = 'rotated';
    setTimeout(() => {
      this.logoState = 'normal';
    }, 2000);
  }
}
