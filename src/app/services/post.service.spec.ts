import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  getPosts() {
    return [
      { id: '1', titre: 'Premier post', contenu: 'Détails premier post' },
      { id: '2', titre: 'Deuxième post', contenu: 'Détails deuxième post' },
      { id: '3', titre: 'Troisième post', contenu: 'Détails troisième post' },
    ];
  }

  constructor() {}
}