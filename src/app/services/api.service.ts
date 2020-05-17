import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    
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

    
}