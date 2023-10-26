import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { WorksDetailsComponent } from './components/pages/works-details/works-details.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'works-details/:projectId', component: WorksDetailsComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }