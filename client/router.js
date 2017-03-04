// client side router

import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full', terminal: true },
  { path: 'posts', component: PostsComponent },
];

export const routing = RouterModule.forRoot(appRoutes);
