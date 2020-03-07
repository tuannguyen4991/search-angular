import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FlickrPhoto } from './image';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/javascript' })
};

const API_URL =
  'https://www.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSONP_CALLBACK';
@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private httpClient: HttpClient) {}

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

  searchImagesByTags(tag: string) {
    return this.httpClient
      .jsonp<FlickrPhoto>(`${API_URL}&tags=${tag}`, 'JSONP_CALLBACK')
      .pipe(catchError(this.handleError('jsonpTest', 'ERROR')));
  }
}
