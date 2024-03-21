import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content/content.service';
import { Observable } from 'rxjs';
import { Movie } from '../app.model';
import { LocalStorageService } from '../local-storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  movie$: Observable<Movie[]> | undefined;

  constructor(private localStorageService: LocalStorageService,private contentService: ContentService) {}

  ngOnInit(): void {
    // aqui pega os filmes favotitos do local storage
    const favoriteMovieIds = this.localStorageService.getFavorites();
    // primeiro verifiquei se tem filmes, se tiver, os detatlhes deles vão ser passados para movie$
    if (favoriteMovieIds.length > 0) {
      this.movie$ = this.contentService.getFavoriteMovies(favoriteMovieIds);
    }
  }
}
