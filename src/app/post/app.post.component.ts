import {Component} from "@angular/core";
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
    constructor(public  posetService: PostService) {
        this.bigPosts = 2;
        posetService.readAll().then(data => this.posts = data.posts);
    }
}