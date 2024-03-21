import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
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

  //funções que buscam na API
  getMovieTitle(name: string) {
    return this.http.get<Search>(`${this.url}&s=${name}`).pipe(map(result => <Movie[]>result.Search))
  }

  getMovieID(id: string) {
    return this.http.get<Movie>(`${this.url}&plot=full&i=${id}`)
  }
  //parte dos favoritos: 
  getFavoriteMovies(ids: string[]){
    const requests = ids.map(id => this.getMovieID(id));
    return forkJoin(requests);
  }
}
// forkJoin(requests):
// aguarda a conclusão de todas as solicitações HTTP
