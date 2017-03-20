import {Component, Input} from "@angular/core";

import {PostModel} from "./app.post.model";

@Component({
    selector: "post-list",
    templateUrl: "./app/post/app.post-list.component.html",
    styleUrls: ["./app/post/app.post-list.component.css"]
})
export class PostList {
    @Input() private posts: PostModel[];
    @Input() private bigPosts: Number = 2;

    constructor() {
    }
}