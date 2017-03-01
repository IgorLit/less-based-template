import {Component} from "@angular/core";

@Component({
    selector:"user-account",
    templateUrl:"./app/account/app.account.component.html",
    styleUrls: ["./app/account/app.account.component.css"]
})
export class UserAccount {
    showDialog:boolean = false;
    user:string;
    isLogin:boolean = false;
     login(username: HTMLInputElement, password: HTMLInputElement) { //TODO authorization with using db.
       if (username.value === "root" && password.value === "root") {
           this.user = username.value;
           this.isLogin = true;
           this.showDialog = false;
       }
    }
    logout() {
         this.isLogin = false;
    }
    constructor() {

    }
}
