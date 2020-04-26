import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FavouritesService } from '../../services/favourites.service';



@Component({
    selector: 'app-character-details',
    templateUrl: './character-details.page.html',
    styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {

    character: Observable<any>;
    isFavourite = false;
    characterId = null;

    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService, private favouritesService: FavouritesService) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.characterId));
            console.log(this.character);
        });

    

    this.favouritesService.isFavouriteCharacters(this.characterId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteCharacter() {
    this.favouritesService.favouriteCharacters(this.characterId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteCharacter() {
    this.favouritesService.unfavouriteCharacters(this.characterId).then(() => {
      this.isFavourite = false;
    });
  }
 
}



