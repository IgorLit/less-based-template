import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import {PostService} from "../../post/app.post.service";
import {AccountService} from "../../account/app.account.service";

@Component({
    selector: "blog",
    templateUrl: "./app/pages/blog/app.pages.blog.component.html",
    styleUrls: ["./app/pages/blog/app.pages.blog.component.css"]
})
export class BlogComponent implements OnInit {
    private post;
    private id;

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
    }

    public isLogin() {
        return AccountService.isLogin;
    }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params['id'];
            this.post = this.postService.readById(this.id).then(data => this.post = data);
        });
    }
}