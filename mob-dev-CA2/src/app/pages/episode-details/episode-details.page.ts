import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';
import { FavouritesService } from '../../services/favourites.service';

@Component({
    selector: 'app-episode-details',
    templateUrl: './episode-details.page.html',
    styleUrls: ['./episode-details.page.scss'],
})
export class EpisodeDetailsPage implements OnInit {

    episode: Observable<any>;


    isFavourite = false;
    episodeId = null;


    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService, private favouritesService: FavouritesService) { }

    ngOnInit() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episodeId.id));
        });

    this.favouritesService.isFavourite(this.episodeId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteEpisode() {
    this.favouritesService.favouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteEpisode() {
    this.favouritesService.unfavouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = false;
    });
  }
 
}