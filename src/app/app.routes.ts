import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';

export const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'auth', component: AuthentificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
