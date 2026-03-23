import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsPageComponent } from './pages/projects/projects-page/projects-page.component';
import { ProjectDetailComponent } from './pages/projects/project-detail/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'work',
    loadComponent: () =>
      import('./pages/work/work-page/work-page.component').then(m => m.WorkPageComponent)
  },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'projects/:slug', component: ProjectDetailComponent }
];
