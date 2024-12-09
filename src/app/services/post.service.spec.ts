import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = 'http://localhost:3000/api/posts';  // Remplace par l'URL de ton serveur si nécessaire

  constructor(private http: HttpClient) { }

  // Récupérer tous les posts
  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Récupérer un post par son ID
  getPostById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
