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

    private _tag: string;

    get tag(): string {
        return this._tag;
    }

    set tag(value: string) {
        this._tag = value;
    }

    constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.tag = params['tag'];
            postService.readByTag(this.tag).then(data => {
                this.posts = data;
            });
        });
    }

    public edit(post: any) {
        this.router.navigate(["posts", post.id, "edit"]);
    }

    public removeYes(post: any) {
        this.postService.remove(post.id).then(() => {
            this.postService.readByTag(this.tag).then(data => {
                this.posts = data;
            });
        });
    }

    public comments(post: any) {
        this.router.navigate(["posts", post.id]);
    }
}