import {Component} from "@angular/core";

import  { AccountService } from "../account/app.account.service";

@Component({
    selector:"user-account",
    templateUrl:"./app/account/app.account.component.html",
    styleUrls: ["./app/account/app.account.component.css"]
})
export class UserAccount {
    public showDialog:boolean = false;

    public isLogin():boolean {
        return AccountService.isLogin;
    }
    constructor(public account: AccountService) {
    }
    public getUserName(): string {
        return AccountService.user.name;
    }
    public logout() {
        this.account.logout();
    }

    public  login(username: HTMLInputElement, password: HTMLInputElement) {
        this.account.login(username, password)
            .then(() => {
                 this.showDialog = false;
            });
    }

}
