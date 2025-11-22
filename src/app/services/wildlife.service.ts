import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class WildlifeService {
  private dataUrl = 'assets/data/wildlife.json';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.dataUrl);
  }

  getPhotoById(id: number): Observable<Photo | undefined> {
    return this.http.get<Photo[]>(this.dataUrl).pipe(
      map((photos: Photo[]) => photos.find(photo => photo.id === id))
    );
  }

  searchPhotos(query: string): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.dataUrl).pipe(
      map((photos: Photo[]) => photos.filter(photo =>
        photo.titulo.toLowerCase().includes(query.toLowerCase()) ||
        photo.ubicacion.toLowerCase().includes(query.toLowerCase()) ||
        (photo.especie && photo.especie.toLowerCase().includes(query.toLowerCase()))
      ))
    );
  }
}
