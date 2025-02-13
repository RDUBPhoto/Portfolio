import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { WorksDetailsComponent } from './components/pages/works-details/works-details.component';

const routes: Routes = [
    { path: '', component: HomeOneComponent },
    { path: 'works-details/:projectId', component: WorksDetailsComponent },
];

const routerOptions: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 70]
};

@NgModule({
    imports: [RouterModule.forRoot(routes, routerOptions)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
