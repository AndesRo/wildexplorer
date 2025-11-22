import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  featuredStats = [
    { number: '500+', label: 'Fotografías' },
    { number: '50+', label: 'Especies' },
    { number: '25+', label: 'Países' },
    { number: '30+', label: 'Fotógrafos' }
  ];

  // Imágenes de fondo de Unsplash (puedes rotar entre ellas)
  backgroundImages = [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
  ];

  currentBackground = '';

  ngOnInit() {
    this.setRandomBackground();
  }

  setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
    this.currentBackground = this.backgroundImages[randomIndex];
  }

  scrollToStats() {
    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      statsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}
