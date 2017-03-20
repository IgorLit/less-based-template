import {Component} from "@angular/core";

import  {AccountService} from "../account/app.account.service";

@Component({
    selector: "account",
    templateUrl: "./app/account/app.account.component.html",
    styleUrls: ["./app/account/app.account.component.css"]
})
export class Account {
    public showDialog: boolean = false;

    constructor(private accountService: AccountService) {
    }

    public isLogin(): boolean {
        return this.accountService.isLogin();
    }

    public getUserName(): string {
        return this.accountService.getUser().name;
    }

    public logout() {
        this.accountService.logout();
    }

    public  login(username: HTMLInputElement, password: HTMLInputElement) {
        this.accountService.login(username, password)
            .then(() => {
                this.showDialog = false;
            });
    }

}
