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
    episodeId = null;
    icon:any = false;
    constructor(private activatedRoute: ActivatedRoute,
        private api: ApiService, private favourites: FavouritesService) { }

    ngOnInit(){

    }
    ionViewWillEnter() {
        this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
        this.api.getEpisode(this.episodeId).subscribe(res => {
            this.episode = res[0];
            console.log(JSON.stringify(this.episodeId.id));
        });

        this.likeCheck();
    }

    likeCheck(){
          this.icon = this.favourites.episodeLike(this.episodeId);
      }
    
      like(episode_id){
        this.icon = this.favourites.addEpisodeLike(episode_id);
        // this.get_like();
      }
}