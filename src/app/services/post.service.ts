import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private apiUrl = 'http://localhost:3000/postList'; // URL du backend

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl); // Récupère les données via API REST
  }
}