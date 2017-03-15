import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {PostService} from "../../post/app.post.service";
import {AccountService} from "../../account/app.account.service";
import {User} from "../../account/app.account.user";

@Component({
    selector: "blog",
    templateUrl: "./app/pages/blog/app.pages.blog.component.html",
    styleUrls: ["./app/pages/blog/app.pages.blog.component.css"]
})
export class BlogComponent implements OnInit {

    private post;
    private id;
    private comments;

    public getUser(): User {
        return AccountService.user;
    }

    public getUserName(): string {
        return AccountService.user.name;
    }

    public isLogin() {
        return AccountService.isLogin;
    }

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.post = this.postService.readById(params['id']).then(data => this.post = data);
            this.id = params['id'];
        });
    }

    public publishComment(input: HTMLInputElement) {
        this.postService.addComment(this.getUser(), this.id, input.value);
    }

    public removeComment(postId: any, commentId: any) {
        this.postService.removeComment(postId, commentId).then((comments) => {
            this.comments = comments;
        });
    }
}