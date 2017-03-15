import {Component, Input, EventEmitter, Output, OnInit} from "@angular/core";
import {Router} from "@angular/router";

import {AccountService} from "../account/app.account.service";

@Component({
    selector: "posts",
    templateUrl: "./app/post/app.post.component.html",
    styleUrls: ["./app/post/app.post.component.css"]
})
export class Post implements  OnInit {
    public showDialog: boolean;

    @Input()
    private bigPosts: Number;
    @Input()
    private posts: any[];

    public isLogin() {
        return AccountService.isLogin;
    }

    public getUser() {
        return AccountService.user;
    }

    public avaliableEdit(creator: any): boolean {
        return creator === this.getUser();
    }

    constructor(private router: Router) {
    }

    ngOnInit(): void {
        this.showDialog = false;
        this.bigPosts = 2;
    }
    public edit(post: any) {
        this.router.navigate(["posts", post.id, "edit"]);
    }
    private post;
    public remove(post: any) {
        this.showDialog = true;
        this.post = post;
    }

    @Output() removeYes = new EventEmitter<void>();
    @Output() removeNo = new EventEmitter<void>();

    public yes() {
        this.removeYes.emit(this.post);
        this.showDialog = false;
    }

    public no() {
        this.removeNo.emit();
        this.showDialog = false;
    }

    public comments(post: any) {
        this.router.navigate(["posts", post.id]);
    }
}