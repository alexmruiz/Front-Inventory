import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';

const childRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },

]

@NgModule({
    imports: [RouterModule.forChild(childRoutes)],
    exports: [RouterModule],
    providers: [],
})
export class  RouterChildModule { }
