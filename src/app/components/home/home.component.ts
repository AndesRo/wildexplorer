import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

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

  showVideos = false;

  // Videos de YouTube sobre vida salvaje
  youtubeVideos = [
    {
      id: 'bk7McNUjWgw', // Mejor video - National Geographic
      title: 'Wildlife of the World',
      description: 'Un viaje por la diversidad de la vida salvaje global'
    },
    {
      id: 'JkaxUblCGz0',
      title: 'Nuestro Planeta',
      description: 'Documental sobre la naturaleza y conservación'
    },
    {
      id: 'aETNYyrqNYE',
      title: 'Wild Africa - BBC',
      description: 'La belleza salvaje del continente africano'
    }

  ];

  backgroundImages = [
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80'
  ];

  currentBackground = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.setRandomBackground();
  }

  setRandomBackground() {
    const randomIndex = Math.floor(Math.random() * this.backgroundImages.length);
    this.currentBackground = this.backgroundImages[randomIndex];
  }

  toggleVideos() {
    this.showVideos = !this.showVideos;

    if (this.showVideos) {
      setTimeout(() => {
        const videosSection = document.getElementById('videos-section');
        if (videosSection) {
          videosSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    }
  }

  getSafeYouTubeUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
