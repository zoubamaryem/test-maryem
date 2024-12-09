import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Importer HttpClientModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule  // Ajouter HttpClientModule dans les imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
