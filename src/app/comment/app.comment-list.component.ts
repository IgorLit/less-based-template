import {Component, OnInit, Input} from "@angular/core";

import {PostModel} from "../post/app.post.model";

@Component({
    selector: "comment-list",
    templateUrl: "./app/comment/app.comment-list.component.html"
})
export class CommentList implements OnInit {
    @Input() private post: PostModel;

    constructor() {
    }

    ngOnInit(): void {
    }
}
