import {Component} from "@angular/core";
import {Router} from "@angular/router";

import {AccountService} from "./account/app.account.service";

@Component({
    selector: "app-root",
    templateUrl: "./app/app.component.html",
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    public createPost() {
        this.router.navigate(["posts", "create"]);
    }

    constructor(private router: Router) {
    }

    public isLogin() {
        return AccountService.isLogin;
    }
}