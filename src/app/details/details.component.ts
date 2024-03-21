import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../content/content.service';
import { Observable } from 'rxjs';
import { Movie } from '../app.model';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  movie$: Observable<Movie> | undefined;

  constructor(private route: ActivatedRoute, private contentService: ContentService, private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); //pega o ID da rota que é passada pelo route
    if (id) {
      this.movie$ = this.contentService.getMovieID(id);
    }
  }

  //vai retornar true ou false para a presença do filme
  favouritesMovies(movieId: string){
    return this.localStorageService.getFavorites().includes(movieId)
  }  

  heartToggle(movieId: string) {
    if(this.favouritesMovies(movieId)){
      this.localStorageService.removeFavorite(movieId)
    } else {
      this.localStorageService.addFavorite(movieId)
    }
  }
}

//ngOnInit()= é um dos métodos do ciclo de vida de um componente 
//Ele é chamado imediatamente após a criação do componente
