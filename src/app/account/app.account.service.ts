import {Injectable} from '@angular/core';
import {Router} from "@angular/router";

import  {User} from  './app.account.user';

@Injectable()
export class AccountService {
    private static user: User = new User();
    private static isLogin: boolean = true;

    constructor(private router: Router) {
    }

    public login(username: HTMLInputElement, password: HTMLInputElement): Promise<any> {
        return new Promise((resolve, reject) => {
            if ((username.value === "root" && password.value === "root") || (username.value === "admin" && password.value === "admin")) {
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

    public getUser(): User {
        return AccountService.user;
    }

    public isLogin():boolean {
        return AccountService.isLogin;
    }

    public logout() {
        this.router.navigate([""]);
        AccountService.isLogin = false;
    }
}