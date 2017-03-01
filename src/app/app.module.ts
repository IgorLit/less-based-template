import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import { Dialog } from './dialog/app.dialog.component';
import  {UserAccount } from './account/app.account.component';

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
        Dialog
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [UserAccount]
})
export class AppModule {
}