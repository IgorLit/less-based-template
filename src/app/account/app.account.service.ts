import { Injectable } from '@angular/core';


@Injectable()
export class AccountService {
    public static user:string;
    public static isLogin:boolean = false;

    public  login(username: HTMLInputElement, password: HTMLInputElement):Promise<any> { //TODO authorization with using db.
       return  new Promise((resolve, reject) => {
            if (username.value === "root" && password.value === "root") {
                console.log("Login true");
                AccountService.isLogin = true;
                AccountService.user = username.value;
                resolve();
            }else {
                reject();
            }
        });
    }

    public   logout() {
        AccountService.isLogin = false;
    }
}