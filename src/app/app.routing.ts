import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import  { MainPage } from "./pages/main/app.pages.main.component";
import  { EditPost } from "./pages/posts/edit/app.pages.posts.edit.component";
import  { CreatePost } from "./pages/posts/create/app.pages.posts.create.component";
import  { RemovePost } from "./pages/posts/remove/app.pages.posts.remove.component";

const appRoutes: Routes = [
    {path: '',  pathMatch: 'full', component:MainPage},
    {path:'posts/:id/edit', component:EditPost},
    {path:'posts/:id/remove', component:RemovePost},
    {path:'posts/create', component:CreatePost}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
