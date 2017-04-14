import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaterialHomeComponent } from './home/material-home.component';

const routes: Routes = [
    { path: 'material', component: MaterialHomeComponent }
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
})
export class MaterialRoutingModule { }
