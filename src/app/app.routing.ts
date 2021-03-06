import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import  {MainPage} from "./pages/main/app.pages.main.component";
import  {EditPost} from "./pages/posts/edit/app.pages.posts.edit.component";
import  {BlogComponent} from "./pages/blog/app.pages.blog.component";
import {FilterPost} from "./pages/posts/filter/app.pages.posts.filter.component";

const appRoutes: Routes = [
    {path: '', pathMatch: 'full', component: MainPage},
    {path: 'posts/create', component: EditPost},
    {path: 'posts/:id', component: BlogComponent},
    {path: 'posts/:id/edit', component: EditPost},
    {path: 'posts/:tag/filter', component: FilterPost}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
