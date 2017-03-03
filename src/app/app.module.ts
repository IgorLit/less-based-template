import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AccountService} from "./account/app.account.service";
import {PostService} from "./post/app.post.service";
import { Dialog } from './dialog/app.dialog.component';
import  {UserAccount } from './account/app.account.component';
import  {Post } from './post/app.post.component';

import {routing, appRoutingProviders} from './app.routing';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        UserAccount,
        Dialog,
        Post
    ],
    providers: [
        appRoutingProviders,
        AccountService,
        PostService
    ],
    bootstrap: [UserAccount, Post]
})
export class AppModule {
}