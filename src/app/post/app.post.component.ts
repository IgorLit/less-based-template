import {Component} from "@angular/core";
import {Router} from "@angular/router";
import  {PostService} from './app.post.service';
import {AccountService} from "../account/app.account.service";
@Component({
    selector: "posts",
    templateUrl: "./app/post/app.post.component.html"
})
export class Post {

    get posts(): any[] {
        return this._posts;
    }

    set posts(value: any[]) {
        this._posts = value;
    }

    private _bigPosts: Number;
    get bigPosts(): Number {
        return this._bigPosts;
    }

    set bigPosts(value: Number) {
        this._bigPosts = value;
    }

    private _posts: any[];

    public isLogin() {
        return AccountService.isLogin;
    }

    public getUser() {
        return AccountService.user;
    }

    public avaliableEdit(creator: any):boolean {
        console.log("creator: " + creator.name + " user:" + this.getUser().name + " equal: " + (creator.name === this.getUser().name));
        return creator === this.getUser();
    }

    constructor(public  posetService: PostService, private router: Router, public accountService: AccountService) {
        this.bigPosts = 2;
        posetService.readAll().then(data => {
            this.posts = data;
        });
    }

    public edit(post: any) {
        this.router.navigate(["posts", post.id, "edit"]);
    }

    public remove(post: any) {
        this.router.navigate(["posts", post.id, "remove"]);
    }

    public comments(post: any) {
        this.router.navigate(["posts", post.id]);
    }
}