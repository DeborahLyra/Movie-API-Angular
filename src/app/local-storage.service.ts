import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
//Funções que adicionam, chama e remove os items do Local Storage | favorites é o nome da chave que criei
  addFavorite(movieId: string): void {
    let favoritesMovies = this.getFavorites();
    if (!favoritesMovies.includes(movieId)) {
      favoritesMovies.push(movieId);
      localStorage.setItem('favorites', JSON.stringify(favoritesMovies));
    }
  }

  getFavorites(): string[] {
    const favorites = localStorage.getItem('favorites');
    return favorites? JSON.parse(favorites) : [];
  }

  removeFavorite(movieId: string): void {
    let favoritesMovies = this.getFavorites();
    favoritesMovies = favoritesMovies.filter(id => id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favoritesMovies));
  }
}
