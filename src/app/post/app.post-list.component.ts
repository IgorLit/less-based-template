import {Component, Input, EventEmitter, Output, OnInit} from "@angular/core";

import {AccountService} from "../account/app.account.service";
import {PostModel} from "./app.post.model";

@Component({
    selector: "post-list",
    templateUrl: "./app/post/app.post-list.component.html",
    styleUrls: ["./app/post/app.post-list.component.css"]
})
export class PostList implements OnInit {
    @Input() private posts: PostModel[];

    constructor(private accountService: AccountService) {
    }

    ngOnInit(): void {
    }

    public isLogin() {
        return AccountService.isLogin;
    }

    public getUser() {
        return this.accountService.getUser();
    }

    // public avaliableEdit(creator: User): boolean {
    //     return creator === this.getUser();
    // }
}