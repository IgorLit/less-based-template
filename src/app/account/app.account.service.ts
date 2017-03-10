import {Injectable} from '@angular/core';
import  {User} from  './app.account.user';

@Injectable()
export class AccountService {
    public static user: User = new User();
    public static isLogin: boolean = false;

    public  login(username: HTMLInputElement, password: HTMLInputElement): Promise<any> { //TODO authorization with using db.
        return new Promise((resolve, reject) => {
            if ((username.value === "root" && password.value === "root") || (username.value === "admin" && password.value === "admin")) {
                console.log("Login true");
                AccountService.user = new User();
                AccountService.isLogin = true;
                AccountService.user.name = username.value;
                AccountService.user.avatarUrl = "assets/img/superman.jpg";
                resolve();
            } else {
                reject();
            }
        });
    }

    public   logout() {
        AccountService.isLogin = false;
    }
}