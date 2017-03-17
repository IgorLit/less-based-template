import {Component} from "@angular/core";

import {AccountService} from "./account/app.account.service";

@Component({
    selector: "app",
    templateUrl: "./app/app.component.html",
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    constructor() {
    }

    public isLogin() {
        return AccountService.isLogin;
    }
}