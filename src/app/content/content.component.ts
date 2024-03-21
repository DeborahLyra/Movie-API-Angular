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

 constructor(private contentService: ContentService){

  }

  find() {
    this.movie$ = this.contentService.getMovieTitle(this.searchMovie);
  }
}
