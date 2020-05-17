import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favouriteEpisodes';
const STORAGE_KEY_CHAR = 'favouriteCharacters';

@Injectable({
    providedIn: 'root'
})
export class FavouritesService {

    constructor(private storage: Storage) { }

    getAllFavouriteEpisodes() {
        return this.storage.get(STORAGE_KEY);
        
    }

    isFavourite(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            return result && result.indexOf(episodeId) !== -1;
        });
    }

    favouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                result.push(episodeId);
                return this.storage.set(STORAGE_KEY, result);
            } else {
                return this.storage.set(STORAGE_KEY, [episodeId]);
            }
        });
    }

    unfavouriteEpisode(episodeId) {
        return this.getAllFavouriteEpisodes().then(result => {
            if (result) {
                var index = result.indexOf(episodeId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY, result);
            }
    });
}


    getAllFavouriteCharacters() {
        return this.storage.get(STORAGE_KEY_CHAR);
        
    }

    isFavouriteCharacters(charactersId) {
        return this.getAllFavouriteCharacters().then(result => {
            return result && result.indexOf(charactersId) !== -1;
        });
    }

    favouriteCharacters(charactersId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                result.push(charactersId);
                return this.storage.set(STORAGE_KEY_CHAR, result);
            } else {
                return this.storage.set(STORAGE_KEY_CHAR, [charactersId]);
            }
        });
    }

    unfavouriteCharacters(charactersId) {
        return this.getAllFavouriteCharacters().then(result => {
            if (result) {
                var index = result.indexOf(charactersId);
                result.splice(index, 1);
                return this.storage.set(STORAGE_KEY_CHAR, result);
           }
    });
  }
 
}

  













