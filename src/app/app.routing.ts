import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import  { MainPage } from "./pages/main/app.pages.main.component";
import  { EditPost } from "./pages/posts/edit/app.pages.posts.edit.component";

const appRoutes: Routes = [
    {path: '',  pathMatch: 'full', component:MainPage},
    {path:'posts/:id/edit', component:EditPost}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
