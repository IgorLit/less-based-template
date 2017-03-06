import { Component } from "@angular/core";
import { Router } from "@angular/router";
import  { PostService } from './app.post.service';

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
    private _bigPosts:Number;
    get bigPosts(): Number {
        return this._bigPosts;
    }

    set bigPosts(value: Number) {
        this._bigPosts = value;
    }

    private _posts:any[];

    constructor(public  posetService: PostService, private router: Router) {
        this.bigPosts = 2;
        posetService.readAll().then(data => {
            console.log(data);
            this.posts = data;
        } );
    }
    public edit(post: any) {
        this.router.navigate(["posts", post.id, "edit"]);
    }
}