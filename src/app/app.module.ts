import {NgModule}      from '@angular/core';
import {Http, HttpModule}      from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

import  {AppComponent} from './app.component';
import {AccountService} from "./account/app.account.service";
import {PostService} from "./post/app.post.service";
import {Dialog} from './dialog/app.dialog.component';
import {MainPage} from './pages/main/app.pages.main.component';
import  {Sidebar} from './sidebar/app.sidebar.component';
import  {UserAccount} from './account/app.account.component';
import  {Post} from './post/app.post.component';
import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";
import {EditPost} from "./pages/posts/edit/app.pages.posts.edit.component";
import  {FilterPost} from "./pages/posts/filter/app.pages.posts.filter.component";
import  {BlogComponent} from "./pages/blog/app.pages.blog.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        UserAccount,
        Dialog,
        Post,
        AppComponent,
        Sidebar,
        MainPage,
        EditPost,
        FilterPost,
        BlogComponent
    ],
    providers: [
        appRoutingProviders,
        AccountService,
        PostService,
        Http
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}