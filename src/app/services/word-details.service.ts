import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { WordAPIResponseModel } from '../models/WordAPI.response.model';

@Injectable({
  providedIn: 'root'
})
export class WordDetailsService {

  wordAPILink:string = 'https://wordsapiv1.p.rapidapi.com/words/'
  wordsAPIHeaders:HttpHeaders = new HttpHeaders()
  .set('X-RapidAPI-Key', '134aeb77b1msh7fe2f036453868cp1fa5b2jsn96ae1f1bb955')
  .set('X-RapidAPI-Host', 'wordsapiv1.p.rapidapi.com');


  constructor(private http:HttpClient) {

  }

  getWordDetails(word:string):Observable<WordAPIResponseModel>{
   return this.http.get(this.wordAPILink + word,{headers:this.wordsAPIHeaders})
   .pipe(
    map((response:any) => {
      return {
        pronunciation:response.pronunciation.all,
        partOfSpeech:response.results[0].partOfSpeech,
        synonyms:response.results[0].synonyms,
        meaning:response.results[0].definition,
        examples:response.results[0].examples
      }
    }),
   )


  }

}
