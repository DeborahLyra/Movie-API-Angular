import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { Observable } from 'rxjs';
import { Movie } from '../app.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  providers:[ContentService], 
})

export class ContentComponent {
  movie$: Observable<Movie[]> | undefined
  searchMovie: any;

  // declarações de variáveis TS e observable é uma representação de uma coleção de valores que podem chegar ao longo do tempo

 constructor(private contentService: ContentService){

  }

  find() {
    this.movie$ = this.contentService.getMovieTitle(this.searchMovie);
  }
}
