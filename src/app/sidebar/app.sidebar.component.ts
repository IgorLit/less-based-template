import {Component} from "@angular/core";
import  {PostService} from "../post/app.post.service";

@Component({
    selector: "sidebar",
    templateUrl: "./app/sidebar/app.sidebar.component.html"
})
export class Sidebar {

    private _posts: any[];

    public get posts() {
        return this._posts;
    }

    public set posts(value) {
        this._posts = value;
    }

    public recentPostsLimit:Number = 4;

    constructor(public postService: PostService) {
        postService.readAll().then(data => {
            this.posts = data;
        });
    }
}