import {Component, OnInit, Input} from "@angular/core";

import {AccountService} from "../account/app.account.service";
import {User} from "../account/app.account.user";
import {PostModel} from "./app.post.model";

@Component({
    selector: "post",
    templateUrl: "./app/post/app.post.component.html"
})
export class Post implements OnInit {
    @Input() private post: PostModel;

    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {
    }

    public getUser(): User {
        return this.accountService.getUser();
    }

    public isLogin(): boolean {
        return AccountService.isLogin;
    }
}
