import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";

import {PostService} from "../../../post/app.post.service";
import {AccountService} from "../../../account/app.account.service";
import {PostModel} from "../../../post/app.post.model";

@Component({
    selector: "filter-post",
    templateUrl: "./app/pages/posts/filter/app.pages.posts.filter.component.html"
})
export class FilterPost implements OnInit {
    public posts;
    private tag: string;

    constructor(private postService: PostService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private accountService: AccountService) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.tag = params['tag'];
            this.postService.readByTag(this.tag).then(data => {
                this.posts = data;
            });
        });
    }

    public isLogin() {
        return AccountService.isLogin;
    }

    public getUser() {
        return this.accountService.getUser();
    }

    public edit(post: PostModel) {
        this.router.navigate(["posts", post.id, "edit"]);
    }

    public removeYes(post: PostModel) {
        this.postService.remove(post.id).then(() => {
            this.postService.readByTag(this.tag).then(data => {
                this.posts = data;
            });
        });
    }

    public comments(post: PostModel) {
        this.router.navigate(["posts", post.id]);
    }
}