import {Component} from "@angular/core";

import  {AccountService} from "../account/app.account.service";

@Component({
    selector: "account",
    templateUrl: "./app/account/app.account.component.html",
    styleUrls: ["./app/account/app.account.component.css"]
})
export class Account {
    public showDialog: boolean = false;

    constructor(private account: AccountService) {
    }

    public isLogin(): boolean {
        return AccountService.isLogin;
    }

    public getUserName(): string {
        return this.account.getUser().name;
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
