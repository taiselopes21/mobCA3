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
    characterId = null;
    icon: any = false;
    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService, private favourites: FavouritesService) { }

    ngOnInit() {
        this.characterId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getCharacter(this.characterId).subscribe(res => {
            this.character = res[0];
            console.log(JSON.stringify(this.characterId));
            console.log(this.character);
        });

    }

    ionViewWillEnter() {


        this.likeCheck();
    }

    likeCheck() {
        this.icon = this.favourites.getCharacterLike(this.characterId);
    }

    like(character_id) {
        this.icon = this.favourites.characterLike(character_id);
        this.likeCheck();
    }

}



