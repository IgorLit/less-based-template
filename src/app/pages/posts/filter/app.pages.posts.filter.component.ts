import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {PostService} from "../../../post/app.post.service";
import {AccountService} from "../../../account/app.account.service";
@Component({
    selector: "filter-post",
    templateUrl: "./app/pages/posts/filter/app.pages.posts.filter.component.html"
})
export class FilterPost {
    public _posts;
    get posts() {
        return this._posts;
    }

    set posts(value) {
        this._posts = value;
    }

    public isLogin() {
        return AccountService.isLogin;
    }

    public getUser() {
        return AccountService.user;
    }

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe((params: Params) => {
            postService.readByTag(params['tag']).then(data => {
                this.posts = data;
            });
        });
    }
}