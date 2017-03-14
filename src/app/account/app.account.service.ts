import {Injectable} from '@angular/core';
import  {User} from  './app.account.user';
import {Router} from "@angular/router";

@Injectable()
export class AccountService {
    public static user: User = new User();
    public static isLogin: boolean = true;

    public  login(username: HTMLInputElement, password: HTMLInputElement): Promise<any> { //TODO authorization with using db.
        return new Promise((resolve, reject) => {
            if ((username.value === "root" && password.value === "root") || (username.value === "admin" && password.value === "admin")) {
                console.log("Login true");
                AccountService.user = new User();
                AccountService.isLogin = true;
                AccountService.user.name = username.value;
                AccountService.user.avatarUrl = "assets/img/user.jpg";
                resolve();
            } else {
                reject();
            }
        });
    }

    constructor(private router: Router) {
    }

    public   logout() {
        this.router.navigate([""]);
        AccountService.isLogin = false;
    }
}