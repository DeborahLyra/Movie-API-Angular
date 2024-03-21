import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent implements OnInit {

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
  }
}
