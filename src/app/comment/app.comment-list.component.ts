import {Component, Input} from "@angular/core";

import {PostModel} from "../post/app.post.model";

@Component({
    selector: "comment-list",
    templateUrl: "./app/comment/app.comment-list.component.html"
})
export class CommentList {
    @Input() private post: PostModel;

    constructor() {
    }
}
