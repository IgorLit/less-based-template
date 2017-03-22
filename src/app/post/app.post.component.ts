import {Component, Input} from "@angular/core";

import {AccountService} from "../account/app.account.service";
import {User} from "../account/app.account.user";
import {PostModel} from "./app.post.model";

@Component({
    selector: "post",
    templateUrl: "./app/post/app.post.component.html"
})
export class Post {
    @Input() private post: PostModel;
    @Input() private showControls: boolean = true;

    constructor(private accountService: AccountService) {
    }

    public getUser(): User {
        return this.accountService.getUser();
    }

    public isLogin(): boolean {
        return this.accountService.isLogin();
    }
}
