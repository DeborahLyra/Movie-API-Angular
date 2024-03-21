import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Movie } from '../app.model';

interface Search {
  Search: Movie[];
}

@Injectable({
  providedIn: 'root'
})

export class ContentService {

  private url: string = 'http://www.omdbapi.com/?apikey=65083f78'

  constructor(private http: HttpClient) { }

  getMovieTitle(name: string) {
    return this.http.get<Search>(`${this.url}&s=${name}`).pipe(map(result => <Movie[]>result.Search))
  }

  getMovieID(name: string) {
    return this.http.get<Movie>(`${this.url}&plot=full&i=${name}`)
  }
}
