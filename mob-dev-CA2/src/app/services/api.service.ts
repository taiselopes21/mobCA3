import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    characters_array = [];
    episodes_array = [];
    page=0
    constructor(private http: HttpClient) { }

    getEpisodes() {https://www.breakingbadapi.com/api/characters?results=20&page=0
        return this.http.get(`https://www.breakingbadapi.com/api/episodes?results=10&page=${this.page}`)
    }
    getEpisode(id) {
        return this.http.get('https://www.breakingbadapi.com/api/episodes/'+id);
    }
    getCharacters() {
        return this.http.get(`https://breakingbadapi.com/api/characters?results=10&page=${this.page}`);

    }
    getCharacter(id) {
        return this.http.get('https://breakingbadapi.com/api/characters/'+id);
    }

    getQuotes() {
        return this.http.get('https://breakingbadapi.com/api/quotes');

    }
    getQuote(id) {
        return this.http.get('https://breakingbadapi.com/api/quotes/'+id);
    }

    getDeaths() {
        return this.http.get('https://breakingbadapi.com/api/deaths');

    }

    characterLike(char_id) {
        let added = false;
        let flag = false;
        for (let item of this.characters_array) {
          if (item.id == char_id) {
            item.likes = !item.likes;
            added = true;
            console.log(this.characters_array);
            if(item.likes){
                flag = true;
            }
            else{
                flag = false;
            }
            break;
          }
        }
    
        if (!added) {
            let data = {
                id: char_id,
                likes: true
            }
          this.characters_array.push(data);
          flag = true;
        }
        return flag;
    }

      getCharacterLike(char_id){
        let flag;
        if(this.characters_array == []){
            console.log('object');
            flag = false;
        }
        else{
            for (let item of this.characters_array) {
                if (item.id == char_id) {
                    if(item.likes){
                        flag = true;
                    }
                    else{
                        flag = false;
                    }
                    break;
                }
                else{
                    console.log('else');
                    flag = false;
                }
                }
    }
        
       return flag;
    }

    episodeLike(id){
        let flag;
        if(this.episodes_array.length < 1){
            console.log('object');
            flag = false;
        }
        else{
            for (let item of this.episodes_array) {
                if (item.id == id) {
                    if(item.likes){
                        flag = true;
                    }
                    else{
                        flag = false;
                    }
                    break;
                }
                else{
                    console.log('else');
                    flag = false;
                }
                }
    }
        
       return flag;
    }

    addEpisodeLike(id) {
        let added = false;
        let flag = false;
        for (let item of this.episodes_array) {
          if (item.id === id) {
            item.likes = !item.likes;
            added = true;
            console.log(this.episodes_array);
            if(item.likes){
                flag = true;
            }
            else{
                flag = false;
            }
            break;
          }
        }
    
        if (!added) {
            let data = {
                id: id,
                likes: true
            }
          this.episodes_array.push(data);
          flag = true;
        }
        return flag;
    }
}