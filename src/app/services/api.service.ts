import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ChuckNorrisJoke } from '../interfaces/ChuckNorrisJoke';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ChuckNorrisJoke> {
    const url = `${this.apiUrl}/`;
    return this.http.get<ChuckNorrisJoke>(url).pipe(map((response) => response));
  }

}
