// client side router

import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';
import { StaticPageComponent } from './staticpage/staticpage.component';
import { ReleasesComponent } from './releases/releases.component';
import { ReleasesDetailComponent } from './releases/releasesDetail.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts', component: PostsComponent },
  { path: 'prinzipien', component: StaticPageComponent },
  { path: 'releases', component: ReleasesComponent },
  { path: 'releases/:id', component: ReleasesDetailComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
