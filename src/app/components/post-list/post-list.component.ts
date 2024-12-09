import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Ajout pour les standalone components
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction : "styleUrls" au lieu de "styleUrl"
})
export class AppComponent {
  title = 'test';
}