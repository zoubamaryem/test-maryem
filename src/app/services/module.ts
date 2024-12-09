import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importation du RouterModule
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostItemComponent } from './post-item/post-item.component';
import { LoginComponent } from './login/login.component';
import { routes } from './app.routes'; // Importation des routes

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostItemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, // Utilisation de BrowserModule, pas CommonModule ici
    RouterModule.forRoot(routes) // Utilisation de routes dans RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
