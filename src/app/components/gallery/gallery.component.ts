import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
import { WildlifeService } from '../../services/wildlife.service';
import { Photo } from '../../models/photo.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('staggerAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'scale(0.9)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class GalleryComponent implements OnInit {
  photos: Photo[] = [];
  filteredPhotos: Photo[] = [];
  searchTerm: string = '';
  selectedPhoto: Photo | null = null;

  constructor(private wildlifeService: WildlifeService) {}

  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.wildlifeService.getPhotos().subscribe(photos => {
      this.photos = photos;
      this.filteredPhotos = photos;
    });
  }

  onSearch(): void {
    if (this.searchTerm.trim()) {
      this.wildlifeService.searchPhotos(this.searchTerm).subscribe(photos => {
        this.filteredPhotos = photos;
      });
    } else {
      this.filteredPhotos = this.photos;
    }
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.filteredPhotos = this.photos;
  }

  viewPhoto(photo: Photo): void {
    this.selectedPhoto = photo;
  }
}
