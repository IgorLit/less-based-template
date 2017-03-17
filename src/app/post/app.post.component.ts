import {Component, Input, EventEmitter, Output, OnInit} from "@angular/core";

import {AccountService} from "../account/app.account.service";
import {PostModel} from "./app.post.model";
import {User} from "../account/app.account.user";

@Component({
    selector: "posts",
    templateUrl: "./app/post/app.post.component.html",
    styleUrls: ["./app/post/app.post.component.css"]
})
export class Post implements OnInit {
    private showDialog: boolean;
    private post;
    @Input() private bigPosts: Number;
    @Input() private posts: PostModel[];
    @Output() removeYes = new EventEmitter<void>();
    @Output() removeNo = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit(): void {
        this.showDialog = false;
        this.bigPosts = 2;
    }

    public isLogin() {
        return AccountService.isLogin;
    }

    public getUser() {
        return AccountService.user;
    }

    public avaliableEdit(creator: User): boolean {
        return creator === this.getUser();
    }

    public remove(post: PostModel) {
        this.showDialog = true;
        this.post = post;
    }

    public yes() {
        this.removeYes.emit(this.post);
        this.showDialog = false;
    }

    public no() {
        this.removeNo.emit();
        this.showDialog = false;
    }

}